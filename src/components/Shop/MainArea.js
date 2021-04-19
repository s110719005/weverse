import { useState,useContext } from "react";
import { Drawer } from "antd";
import { Select } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ProductList from "./ProductList";
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
        paddingLeft: !isNavBarVisible?"5rem":"3rem",
        paddingRight: !isNavBarVisible?"5rem":"3rem",
      });
    return (
        <animated.div  style={closeNav} className="mainarea">
           
       
        {isNavBarVisible ? true : false }
            <div className="mainarea-topic-text">
                Weverse Shop
            </div>
            <div className="mainarea-bar-container">
                <Select defaultValue="ALL" 
                style={{ 
                    width: 150, 
                    borderRadius:"50px",
                }} 
                onChange={handleChange}
                >
                    <Option value="ALL">ALL</Option>
                    <Option value="BABY">BABY</Option>
                    <Option value="BUBBLE">BUBBLE</Option>
                    <Option value="WINTER">WINTER</Option>
                </Select>
                <Search placeholder="Search" allowClear onSearch={onSearch} style={{ width: 150 }} />
            </div>
            
            <div className="mainarea-artist-text">
                BTS
            </div>
            <div className="mainarea-productlist-container">
                <ProductList products={products}/>
            </div>
            
       
        </animated.div>
            
    );
}

export default MainArea;