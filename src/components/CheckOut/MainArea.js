import { useState,useContext,useEffect } from "react";
import { Drawer } from "antd";
import { Select } from 'antd';
import { Form,Input, Space,Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Layout from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"
import CartList from "./CartList";
import SmallCartList from "./SmallCartList";
import Finish from "./Finish";

import { DownOutlined } from '@ant-design/icons';
import { setProductDetail,createOrder,saveShippingAddress } from "../../actions";
import { WarningOutlined } from '@ant-design/icons';



const { Option } = Select;

const { Search } = Input;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

const onSearch = value => console.log(value);


function MainArea({isNavBarVisible}) {
    const { state: { page: { title, products } ,cart: { shippingAddress },cart,orderInfo: { loading, error }},dispatch  } = useContext(StoreContext);
    const { cartItems } = cart;

    //const handleCancel = () => toggleModal(!isModalVisible);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }
   const [isFirstListOPen, setIsFirstListOPen] = useState(false);

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   const [form] = Form.useForm();
   const onFinish = (values) => {
        console.log('Received values of form: ', values);
        saveShippingAddress(dispatch, values);
        setIsPage2(false);
        //createOrder(dispatch, cart);
        //await createOrder(dispatch, cart);
    };
   ////////
   const open1 = useSpring({
    
    height:isFirstListOPen?"35vh":"0rem",
    });
    const closeNav = useSpring({
        // from: { opacity: 0 },
        // to: { opacity: 1 }
        paddingLeft: !isNavBarVisible?"2rem":"1rem",
        paddingRight: !isNavBarVisible?"2rem":"1rem",
      });
      const [isPage1, setIsPage1] = useState(true);
      const [isPage2, setIsPage2] = useState(true);
      const dropped = useSpring({
        marginTop:isPage1?"3rem":"100vh",
        marginRight:isPage1?"0rem":"20rem",
     });
      const dropped2 = useSpring({
        marginTop:isPage1?"1.5rem":(isPage2?"3rem":"60rem"),
        marginLeft:!isPage1?"0rem":"5rem",
        marginRight:isPage2?"0rem":"20rem",
        borderWidth:isPage1?"0px":"1px",
        opacity:isPage1?"0":"1",
     });
      const Page2gradientChange = useSpring({
        opacity:isPage1?"0.4":"0",
        marginTop:isPage1?"1.5rem":(isPage2?"3rem":"60rem"),
        marginRight:isPage2?"0rem":"20rem",
     });
      const Page2bgChange = useSpring({
        opacity:isPage1?"0":"1",
     });
      const Page3gradientChange = useSpring({
        opacity:isPage2?"0.4":"0",
        marginLeft:isPage1?"10rem":(isPage2?"5rem":"0rem"),
     });
      const Page3bgChange = useSpring({
        opacity:isPage2?"0":"1",
        marginLeft:!isPage2?"0rem":"1.5rem",
        marginLeft:isPage1?"3rem":(isPage2?"1.5rem":"0rem"),
        marginTop:isPage2?"0rem":"1.5rem",
     });
    return (
        <animated.div  style={closeNav} className="mainarea">
           
       
        {isNavBarVisible ? true : false }
        <div className="mainarea-topic-text">
                Weverse Shop
            </div>
            <div className="checkout-card-con">
            <animated.div style={Page3gradientChange}className = "checkout-card3 checkout-card-gradient"></animated.div>
                
                <animated.div style={Page3bgChange} className="checkout-card3">
                    <Finish/>
                    <div className="checkout-btn-con">
                        <div className="btn-hover-purple text-white checkout-back-btn1"
                            style={{opacity:0}}
                        >
                            Previous
                        </div>
                        <Link to="/">
                            <div className="text-white checkout-next-btn1"
                                onClick={() => {
                                    createOrder(dispatch, cart);
                                }}
                            >
                                Back to Shop
                            </div>
                        </Link>
                    </div>

                </animated.div>
                <animated.div style={Page2gradientChange}className = "checkout-card2 checkout-card-gradient"></animated.div>
                
                <animated.div style={dropped2} className="checkout-card2">
                    {/* <SmallCartList/> */}
                    <Form
                            name="normal_order"
                            className="order-form"
                            form={form}
                            onFinish={onFinish}
                            initialValues={shippingAddress}
                            >
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
                                            //handleCancel();
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
                                            //handleCancel();
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
                                        <Form.Item
                                            name="fullname"
                                            rules={[
                                            {
                                                required: true,
                                                message: "Please input your full name!",
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input placeholder="" />
                                        </Form.Item>
                                        <div className="text-white smallList-input-text">
                                            Address
                                        </div>
                                        <Form.Item
                                            name="address"
                                            rules={[
                                            {
                                                required: true,
                                                message: "Please input your address!",
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input placeholder="" />
                                        </Form.Item>
                                        <div className="text-white smallList-input-text">
                                            Email
                                        </div>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                            {
                                                type: "email",
                                                message: "The input is not valid E-mail!",
                                            },
                                            {
                                                required: true,
                                                message: "Please input your E-mail!",
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input placeholder="" />
                                        </Form.Item>
                                        <div className="text-white smallList-input-text">
                                            Phone Number
                                        </div>
                                        <Form.Item
                                            name="phone"
                                            rules={[
                                            {
                                                required: true,
                                                message: "Please input your phone number!",
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input placeholder=""/>
                                        </Form.Item>
                                    </div>
                                    <div className="smallList-right">
                                        <div className="text-white smallList-input-text">
                                            Delivery Detail
                                        </div>
                                        <div className="text-white smallList-input-text">
                                            Reciient Name
                                        </div>
                                        <Form.Item
                                            name="reciientName"
                                            rules={[
                                            {
                                                required: true,
                                                message: "Please input reciient name!",
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input placeholder=""/>
                                        </Form.Item>
                                        <div className="text-white smallList-input-text">
                                        Reciient Phone Number
                                        </div>
                                        <Form.Item
                                            name="reciientPhone"
                                            rules={[
                                            {
                                                required: true,
                                                message: "Please input reciient phone number!",
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input placeholder=""/>
                                        </Form.Item>
                                        <div className="text-white smallList-input-text">
                                            Reciient Address
                                        </div>
                                        <Form.Item
                                            name="reciientAddress"
                                            rules={[
                                            {
                                                required: true,
                                                message: "Please input reciient address!",
                                            },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input placeholder=""/>
                                        </Form.Item>
                                    </div>
                                </div>
                            
                            </div>
                        )}
                        
                        
                        
                    </div>
                    <div className="checkout-btn-con">
                        <div className="btn-hover-purple text-white checkout-back-btn1"
                            onClick={() => {
                                setIsPage1(!isPage1);
                            }}
                        >
                            Previous
                        </div>
                        <div className="text-white checkout-next-btn1"
                        >
                            {loading ? (
                            <Button
                                type="primary"
                                className="login-form__button"
                                htmlType="submit"
                                loading
                            >
                                Confirm
                            </Button>
                            ) : (
                            <Button
                                type="primary"
                                className="login-form__button"
                                htmlType="submit"
                                
                            >
                                Place Order
                            </Button>
                            )}
                            
                            {error === null ? (
                            <></>
                            ) : (
                            <div className="login-form__error-wrap">
                                <h3 className="login-form__error-title">
                                <WarningOutlined className="site-form-item-icon" />
                                {"  "}There was a problem
                                </h3>
                                <p className="login-form__error-message">{error}</p>
                            </div>
                            )}
                        </div>
                        
                    </div>
                    </Form>
                </animated.div>
                <animated.div style={dropped} className="checkout-card1">
                    
                    <CartList/>
                    <div className="checkout-btn-con">
                        <Link to="/">
                            <div className="btn-hover-purple text-white checkout-back-btn1"
                                
                            >
                                Back to Shop
                            </div>
                        </Link>
                        
                        <div className="btn-hover-white text-white checkout-next-btn1"
                            onClick={() => {
                                setIsPage1(!isPage1);
                            }}
                        >
                            Next
                        </div>
                    </div>
                    
                </animated.div>
            </div>
           
            
       
        </animated.div>
            
    );
}

export default MainArea;