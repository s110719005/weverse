import { useState,useContext } from "react";
import { useHistory } from "react-router-dom";

import { Drawer } from "antd";
import { Select } from 'antd';
import { Input, Space } from 'antd';
import { Form, Button } from "antd";

import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"
import { logoutFromFirebase} from "../../actions";
import AccountCard1 from "./AccountCard1";

import { UserOutlined,LineChartOutlined,SnippetsOutlined,StarOutlined } from '@ant-design/icons';



function MainArea({isNavBarVisible}) {
    const {
        state: {
          userSignin: { userInfo },
        },
        dispatch,
      } = useContext(StoreContext);
      //const { displayName, email } = userInfo;
      const history = useHistory();
      const [form] = Form.useForm();
    
      const handleLogout = () => {
        logoutFromFirebase(dispatch);
        history.push("/");
      };
    const closeNav = useSpring({
        paddingLeft: !isNavBarVisible?"2rem":"3rem",
        paddingRight: !isNavBarVisible?"2rem":"3rem",
      });
    const [isStep1, setIsStep1] = useState("flex");
    const [isStep2, setIsStep2] = useState("none");
    const [isStep3, setIsStep3] = useState("none");
    const [isStep4, setIsStep4] = useState("none");
    const [isStep5, setIsStep5] = useState("none");
    const [isStep6, setIsStep6] = useState("flex");
    const [isStep7, setIsStep7] = useState("flex");
    const [isStep8, setIsStep8] = useState("flex");
    return (
        <animated.div  style={closeNav} className="text-white account-mainarea">
           
       
        {isNavBarVisible ? true : false }
          <div className="account-title">
            Account
          </div>
          <div className="account-card-area">
            <div className="account-icons-container">
              <div className="account-icon1-container-inactive account-icons-inactive"
                style={{display:isStep5}}
                onClick={() => {
                  setIsStep1("flex");
                  setIsStep2("none");
                  setIsStep3("none");
                  setIsStep4("none");
                  setIsStep5("none");
                  setIsStep6("flex");
                  setIsStep7("flex");
                  setIsStep8("flex");
               }}
              >
                <UserOutlined 
                  style={{ fontSize: '24px' }}
                />
              </div>
              <div className="account-icon1-container-active account-icons-active"
                style={{display:isStep1}}
              >
                <UserOutlined 
                  style={{ fontSize: '24px' }}
                />
              </div>
              <div className="account-icon2-container-inactive account-icons-inactive"
                style={{display:isStep6}}
                onClick={() => {
                  setIsStep1("none");
                  setIsStep2("flex");
                  setIsStep3("none");
                  setIsStep4("none");
                  setIsStep5("flex");
                  setIsStep6("none");
                  setIsStep7("flex");
                  setIsStep8("flex");
               }}
              >
                <LineChartOutlined 
                  style={{ fontSize: '24px' }}
                /> 
              </div>
              <div className="account-icon2-container-active account-icons-active"
                style={{display:isStep2}}
              >
                <LineChartOutlined 
                  style={{ fontSize: '24px' }}
                /> 
              </div>
              <div className="account-icon3-container-inactive account-icons-inactive"
                style={{display:isStep7}}
                onClick={() => {
                  setIsStep1("none");
                  setIsStep2("none");
                  setIsStep3("flex");
                  setIsStep4("none");
                  setIsStep5("flex");
                  setIsStep6("flex");
                  setIsStep7("none");
                  setIsStep8("flex");
               }}
              >
                <StarOutlined 
                  style={{ fontSize: '24px' }}
                />
              </div>
              <div className="account-icon3-container-active account-icons-active"
               style={{display:isStep3}}
              >
                <StarOutlined 
                  style={{ fontSize: '24px' }}
                />
              </div>
              <div className="account-icon4-container-inactive account-icons-inactive"
                style={{display:isStep8}}
                onClick={() => {
                  setIsStep1("none");
                  setIsStep2("none");
                  setIsStep3("none");
                  setIsStep4("flex");
                  setIsStep5("flex");
                  setIsStep6("flex");
                  setIsStep7("flex");
                  setIsStep8("none");
               }}
              >
                <SnippetsOutlined 
                  style={{ fontSize: '24px' }}
                />
              </div>
              <div className="account-icon4-container-active account-icons-active"
                style={{display:isStep4}}
              >
                <SnippetsOutlined 
                  style={{ fontSize: '24px' }}
                />
              </div>
            </div >
            <div className="account-card1-container"
              style={{display:isStep1}}
            >
              <div className="account-card1-title">
                Account Management
              </div>
              <div>
                <AccountCard1/>
              </div>
            </div>
            <div className="account-card1-container"
              style={{display:isStep2}}
            >
              <div className="account-card1-title">
                Account 2
              </div>
              <div>
                <AccountCard1/>
              </div>
            </div>
            <div className="account-card1-container"
              style={{display:isStep3}}
            >
              <div className="account-card1-title">
                Account 3
              </div>
              <div>
                <AccountCard1/>
              </div>
            </div>
            <div className="account-card1-container"
              style={{display:isStep4}}
            >
              <div className="account-card1-title">
                Account 4
              </div>
              <div>
                <AccountCard1/>
              </div>
            </div>
          </div>
          
          {/* <Button
          type="danger"
          style={{ marginTop: "0.8rem" }}
          className="login-form__button"
          onClick={handleLogout}
          >
            Log out
          </Button> */}
            
            
            
            
            
       
        </animated.div>
            
    );
}

export default MainArea;