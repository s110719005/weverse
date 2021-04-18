import { Modal, Button, Select,Row ,Input} from "antd";
import { useEffect, useContext,useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store"
import { CartIcon } from "../Icons";
import { addCartItem, removeCartItem, setProductDetail } from "../../actions";
import { DownOutlined } from '@ant-design/icons';
import {useSpring, animated} from 'react-spring'
const { Option } = Select;

export default function Finish({ isModalVisible, toggleModal }) {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }
   const [isFirstListOPen, setIsFirstListOPen] = useState(false);

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   const open1 = useSpring({
    
    height:isFirstListOPen?"35vh":"0rem",
 });

 



   return (
      <div className="checkout">
        {cartItems.length === 0 ? (
            <div>Cart is empty</div>
        ) : 
        (
            <div className="">
                <div className="text-white checkout-bigtitle"
                style={{textAlign:"center"}}
                >
                        Thank You For Your Order!
                </div>
                <div className="text-white checkout-bigtitle">
                        Order Summary
                </div>
                
            <div className="checkout-list-con"> 
            {cartItems.map(item => (
                <div>
                <li key={item.id} className="cart-item">
                    
                        <div className="cart-image" onClick={()=>{
                            setProductDetail(dispatch, item.id, item.qty);
                            handleCancel();
                        }}>
                            <img className="cart-image" src={item.image[item.typNum]} alt={item.name} />
                        </div>
                    
                    <div className="text-white cart-name">{item.name}</div>
                    <div className="text-grey cart-type">{item.typ}</div>
                            <div className="text-grey product-qty ">
                            
                                {item.qty}
                            
                            </div>
                        <div className="text-grey cart-price">
                        ${Math.trunc(item.price * item.qty)}
                        </div>
                    
                </li>
                <li key={item.id} className="cart-item-phone">
                    
                        <div className="cart-image" onClick={()=>{
                            setProductDetail(dispatch, item.id, item.qty);
                            handleCancel();
                        }}>
                            <img className="cart-image" src={item.image[item.typNum]} alt={item.name} />
                        </div>
                    
                    <div className="checkout-phonelist-middle">
                        <div className="text-white cart-name">{item.name}</div>
                        <div className="checkout-phonelist-middlebottom">
                            <div className="phone-list-detail">
                                <div className="text-grey cart-type">Type</div>
                                <div className="text-grey cart-type">:&nbsp;{item.typ}</div>
                            </div>
                            <div className="phone-list-detail">
                                <div className="text-grey product-qty ">
                                Qty
                                    
                                </div>
                                <div className="text-grey product-qty">
                                :&nbsp;
                                {item.qty}
                                
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
                    
                </li>
                
                </div>
            ))}
            </div>
            <div className="smallList-notopen-con">
                <div className="text-white checkout-bigtitle">
                        Item Subtotal&nbsp;
                </div>
                <div className="text-grey checkout-bigtitle2">
                        :&nbsp;${Math.trunc(getTotalPrice())}
                </div>
            </div>
            <div className="smallList-notopen-con">
                <div className="text-white checkout-bigtitle">
                        Delivery Fee&nbsp;
                </div>
                <div className="text-grey checkout-bigtitle2">
                        :&nbsp;80
                </div>
            </div>
            <div className="smallList-notopen-con">
                <div className="text-white checkout-bigtitle">
                        Recipent Name&nbsp;
                </div>
                <div className="text-grey checkout-bigtitle2">
                :&nbsp;NAME
                </div>
            </div>
            <div className="smallList-notopen-con">
                <div className="text-white checkout-bigtitle">
                        Recipent Address&nbsp;:
                </div>
            </div>
            <div className="smallList-notopen-con">
                <div className="text-grey checkout-bigtitle">
                        Address&nbsp;
                </div>
            </div>
            <div className="smallList-notopen-con">
                <div className="text-white checkout-bigtitle">
                        Recipent Phone Numbers&nbsp;:
                </div>
            </div>
            <div className="smallList-notopen-con">
                <div className="text-grey checkout-bigtitle">
                        Address&nbsp;
                </div>
            </div>
            
            <div className="smallList-bottom">
                
            </div>
            </div>
         )}
         
         
         
      </div>
      
   );
  
}