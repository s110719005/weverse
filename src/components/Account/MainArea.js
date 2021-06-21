import { useState,useContext } from "react";
import { useHistory } from "react-router-dom";

import { Drawer } from "antd";
import { Select } from 'antd';
import { Input, Space } from 'antd';
import { Form, Button } from "antd";

import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"
import { logoutFromFirebase} from "../../actions";



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
        <animated.div  style={closeNav} className="mainarea">
           
       
        {isNavBarVisible ? true : false }
            <Button
            type="danger"
            style={{ marginTop: "0.8rem" }}
            className="login-form__button"
            onClick={handleLogout}
            >
            Log out
            </Button>
            <div className="text-white">
              {userInfo.displayName}
            </div>
            <div className="text-white">
              {userInfo.email}
            </div>
            <div className="text-white">
              {userInfo.gender}
            </div>
            <div className="text-white">
              {userInfo.address}
            </div>
            <div className="text-white">
              {userInfo.displayName}
            </div>
            <div className="text-white">
              {userInfo.phone}
            </div>
            
            
            
            
       
        </animated.div>
            
    );
}

export default MainArea;