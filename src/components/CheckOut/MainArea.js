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
    return (
        <animated.div  style={closeNav} className="mainarea">
           
       
        {isNavBarVisible ? true : false }
            <div>
                hi
            </div>
            
       
        </animated.div>
            
    );
}

export default MainArea;