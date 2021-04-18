import { Modal, Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store"
import { CartIcon } from "../Icons";
import { addCartItem, removeCartItem, setProductDetail } from "../../actions";
const { Option } = Select;

export default function CartModal({ isModalVisible, toggleModal }) {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   

   return (
      <Modal
         title="Shopping Bag"
         visible={isModalVisible}
         onCancel={handleCancel}
         footer={null}
         className="cart-modal"
         width={"20rem"}
         marginLeft={"0px"}
         style={{
            top:"65px",
            marginRight:"8rem"
         }}
      >
         <div>
         {cartItems.length === 0 ? (
            <div className="text-white">
               Cart is empty
               <div className="text-white cart-check btn-hover-white">
                  <Link to="/">
                     Go to Shop
                  </Link>
                  
               </div>
            </div>
         ) : (
            <div>
            {cartItems.map(item => (
               <li key={item.id} className="cart-item">
                  <Link to={`/product/${item.id}`}>
                     <div className="cart-image" onClick={()=>{
                        setProductDetail(dispatch, item.id, item.qty);
                        handleCancel();
                     }}>
                        <img className="cart-image" src={item.image[item.typNum]} alt={item.name} />
                     </div>
                  </Link>
                  <div className="cart-item-content">
                     <div className="cart-left">
                        <div className="text-white cart-name">{item.name}</div>
                        <div className="cart-detail-con">
                           <div className="text-grey cart-type">{item.typ} x</div>
                              <div className="product-qty">
                              
                                 <Select
                                    defaultValue={item.qty}
                                    value={item.qty}
                                    className="select-style"
                                    onChange={(qty) => addCartItem(dispatch, item, qty,item.typ,item.typNum)}
                                 >
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                       <Option key={x + 1} value={x + 1}>
                                          {x + 1}
                                       </Option>
                                    ))}
                                 </Select>
                              
                              </div>
                           <div className="text-grey cart-price">
                           &nbsp;= ${Math.trunc(item.price * item.qty)}
                           </div>
                        </div>
                     </div>
                     <div className="cart-right" onClick={() => removeCartItem(dispatch, item.id)}>
                        <div className="text-white cart-delete">
                        x
                        </div>
                     </div>
                  </div>
                  

               </li>
            ))}
               <div className="text-white cart-total-price-wrap">
                  Total&nbsp;
                  <div className="cart-total-price">${Math.trunc(getTotalPrice())}</div>
               </div>
            <div className="text-white cart-check btn-hover-white">
                  <Link to="/CheckOut">
                     Check Out
                  </Link>
                  
            </div>
         </div>
         )}
         
         </div>
      </Modal>
   );
}