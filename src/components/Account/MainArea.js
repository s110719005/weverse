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
    return (
        <animated.div  style={closeNav} className="mainarea text-white">
           
       
        {isNavBarVisible ? true : false }
          <div className="text-white">
            Account
          </div>
          <div>
            <div>
              <div className="account-icon1-container">
                <UserOutlined />
              </div>
              <div>
                <LineChartOutlined /> 
              </div>
              <div>
                <StarOutlined />
              </div>
              <div>
                <SnippetsOutlined />
              </div>
            </div>
            <div>
              Account Management{/* <AccountCard1/> */}
            </div>
          </div>
          
          <Button
          type="danger"
          style={{ marginTop: "0.8rem" }}
          className="login-form__button"
          onClick={handleLogout}
          >
            Log out
          </Button>
            
            
            
            
            
       
        </animated.div>
            
    );
}

export default MainArea;