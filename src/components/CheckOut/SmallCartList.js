// @refresh reset
import { Modal, Button, Select,Row ,Input} from "antd";
import { useEffect, useContext,useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store"
import { CartIcon } from "../Icons";
import { addCartItem, removeCartItem, setProductDetail } from "../../actions";
import { DownOutlined } from '@ant-design/icons';
import {useSpring, animated} from 'react-spring'
const { Option } = Select;

export default function SmallCartList({ isModalVisible, toggleModal }) {
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
            <div className="smallList">
            <div className="smallList-notopen">
                <div className="smallList1">
                    <div className="smallList-top">
                        <div className="smallList-notopen-con">
                            <div className="text-white checkout-bigtitle">
                                    Order Total&nbsp;
                            </div>
                            <div className="text-white checkout-bigtitle2">
                                    :&nbsp;${Math.trunc(getTotalPrice())+80}
                            </div>
                        </div>
                        <div className="smallList-notopen-con">
                            <div className="text-white checkout-bigtitle">
                                    Shopping Bag
                            </div>
                            <div className="text-white checkout-bigtitle2">
                            :&nbsp;{cartItems.length}&nbsp;items
                            </div>
                        </div>
                    </div>
                    <div className="smallList-notopen-btn"
                        onClick={() => {
                            setIsFirstListOPen(!isFirstListOPen);
                        }}
                    >
                        <DownOutlined />
                    </div>
                </div>
            <animated.div  style={open1}className="smallList-open"> 
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
            </animated.div>
            </div>
            <div className="smallList-bottom">
                <div className="smallList-left">
                    <div className="text-white smallList-input-text">
                        CustomerInfo
                    </div>
                    <div className="text-white smallList-input-text">
                        Full Name
                    </div>
                    <Input placeholder="Basic usage" />
                    <div className="text-white smallList-input-text">
                        Address
                    </div>
                    <Input placeholder="Basic usage" />
                    <div className="text-white smallList-input-text">
                        Email
                    </div>
                    <Input placeholder="Basic usage" />
                    <div className="text-white smallList-input-text">
                        Phone Number
                    </div>
                    <Input placeholder="Basic usage" />
                </div>
                <div className="smallList-right">
                    <div className="text-white smallList-input-text">
                        Delivery Detail
                    </div>
                    <div className="text-white smallList-input-text">
                        Reciient Name
                    </div>
                    <Input placeholder="Basic usage" />
                    <div className="text-white smallList-input-text">
                    Reciient Phone Number
                    </div>
                    <Input placeholder="Basic usage" />
                    <div className="text-white smallList-input-text">
                        Reciient Address
                    </div>
                    <Input placeholder="Basic usage" />
                </div>
            </div>
            </div>
         )}
         
         
         
      </div>
      
   );
  
}