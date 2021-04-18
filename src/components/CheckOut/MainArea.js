import { useState,useContext } from "react";
import { Drawer } from "antd";
import { Select } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Layout from "antd/lib/layout/layout";

import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"
const { Option } = Select;

const { Search } = Input;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

const onSearch = value => console.log(value);


function MainArea({isNavBarVisible}) {
    const { state: { page: { title, products } } } = useContext(StoreContext);
    const closeNav = useSpring({
        // from: { opacity: 0 },
        // to: { opacity: 1 }
        paddingLeft: !isNavBarVisible?"7rem":"3rem",
        paddingRight: !isNavBarVisible?"7rem":"3rem",
      });
      const [isPage1, setIsPage1] = useState(true);
      const [isPage2, setIsPage2] = useState(true);
      const dropped = useSpring({
        marginTop:isPage1?"3rem":"50rem",
        marginRight:isPage1?"0rem":"20rem",
     });
      const dropped2 = useSpring({
        marginTop:isPage2?"1.5rem":"50rem",
        marginRight:isPage2?"0rem":"20rem",
        borderWidth:isPage1?"0px":"1px",
        opacity:isPage1?"0":"1",
     });
      const Page2gradientChange = useSpring({
        opacity:isPage1?"0.4":"0",
        marginTop:isPage2?"1.5rem":"50rem",
        marginRight:isPage2?"0rem":"20rem",
     });
      const Page2bgChange = useSpring({
        opacity:isPage1?"0":"1",
     });
      const Page3gradientChange = useSpring({
        opacity:isPage2?"0.4":"0",
     });
      const Page3bgChange = useSpring({
        opacity:isPage2?"0":"1",
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
                    
                    <div className="text-white checkout-next-btn1"
                            onClick={() => {
                                setIsPage2(!isPage2);
                            }}
                        >
                            Previous
                    </div>
                </animated.div>
                <animated.div style={Page2gradientChange}className = "checkout-card2 checkout-card-gradient"></animated.div>
                
                <animated.div style={dropped2} className="checkout-card2">
                
                    <div className="text-white checkout-next-btn1"
                        onClick={() => {
                            setIsPage1(!isPage1);
                        }}
                    >
                        Previous
                    </div>
                    <div className="text-white checkout-next-btn1"
                        onClick={() => {
                            setIsPage2(!isPage2);
                        }}
                    >
                        Next
                    </div>
                </animated.div>
                <animated.div style={dropped} className="checkout-card1">
                    <div className="text-white checkout-next-btn1"
                        onClick={() => {
                            setIsPage1(!isPage1);
                          }}
                    >
                        Next
                    </div>
                </animated.div>
            </div>
           
            
       
        </animated.div>
            
    );
}

export default MainArea;