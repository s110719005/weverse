import { Modal, Button, Select,Row } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store"
import { CartIcon } from "../Icons";
import { addCartItem, removeCartItem, setProductDetail } from "../../actions";
const { Option } = Select;

export default function CartList({ isModalVisible, toggleModal }) {
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
      <div className="checkout">
        {cartItems.length === 0 ? (
            <div>Cart is empty</div>
        ) : 
        (
            
            <div> 
                <div className="text-white checkout-bigtitle">
                        Shopping Bag
                </div>
                <div className="checkout-title">
                    <div className="text-white cart-image-con">Product</div>
                    
                    <div className="text-white cart-type">Type</div>
                    <div className="text-white product-qty">QTY</div>
                    <div className="text-white cart-price">Subtotal</div>
                    <div className="text-white cart-delete"></div>
                </div>
            <div className="checkout-list-con"> 
            {cartItems.map(item => (
                <div>
                <li key={item.id} className="cart-item">
                    <Link to={`/product/${item.id}`}>
                        <div className="cart-image" onClick={()=>{
                            setProductDetail(dispatch, item.id, item.qty);
                            handleCancel();
                        }}>
                            <img className="cart-image" src={item.image[item.typNum]} alt={item.name} />
                        </div>
                    </Link>
                    <div className="text-white cart-name">{item.name}</div>
                    <div className="text-grey cart-type">{item.typ}</div>
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
                        ${Math.trunc(item.price * item.qty)}
                        </div>
                    <div className="cart-right" onClick={() => removeCartItem(dispatch, item.id)}>
                        <div className="text-white cart-delete">
                            x
                        </div>
                    </div>
                </li>
                <li key={item.id} className="cart-item-phone">
                    <Link to={`/product/${item.id}`}>
                        <div className="cart-image" onClick={()=>{
                            setProductDetail(dispatch, item.id, item.qty);
                            handleCancel();
                        }}>
                            <img className="cart-image" src={item.image[item.typNum]} alt={item.name} />
                        </div>
                    </Link>
                    <div className="checkout-phonelist-middle">
                        <div className="text-white cart-name">{item.name}</div>
                        <div className="checkout-phonelist-middlebottom">
                            <div className="phone-list-detail">
                                <div className="text-grey cart-type">Type</div>
                                <div className="text-grey cart-type">:&nbsp;{item.typ}</div>
                            </div>
                            <div className="phone-list-detail">
                                <div className="text-grey product-qty">
                                Qty
                                    
                                </div>
                                <div className="text-grey product-qty">
                                :&nbsp;
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
                            </div>
                                <div className="phone-list-detail">
                                    <div className="text-grey cart-price">
                                        Total
                                    </div>
                                    <div className="text-grey cart-price">
                                    :&nbsp;${Math.trunc(item.price * item.qty)}
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="cart-right" onClick={() => removeCartItem(dispatch, item.id)}>
                        <div className="text-white cart-delete">
                            x
                        </div>
                    </div>
                </li>
                </div>
            ))}
            </div>
            </div>
         )}
         <div className="text-white checkout-bigtitle">Order Summary</div>
         <div className="checkout-summary-con">
             <div className="checkout-subtotal">
                <div className="text-white">Item Subtotal:&nbsp;&nbsp;</div>
                <div className="text-white">${Math.trunc(getTotalPrice())}</div>
             </div>
             <div className="checkout-subtotal">
             <div className="text-white">Delivery Fee:&nbsp;&nbsp;&nbsp;</div>
            <div className="text-white">$80</div>
             </div>
             <div className="checkout-total">
                <div className="text-white">Total:&nbsp;&nbsp;&nbsp;</div>
                <div className="text-white">${Math.trunc(getTotalPrice())+80}</div>
            </div>
         </div>
         
         
      </div>
      
   );
  
}