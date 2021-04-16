import { useState } from "react";
import { Drawer } from "antd";
import { Select } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ProductList from "./Shop/ProductList";
import Layout from "antd/lib/layout/layout";
const { Option } = Select;

const { Search } = Input;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

const onSearch = value => console.log(value);


export default function MainArea({isNavBarVisible}) {
    return (
        <div className="mainarea">
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
                <ProductList isNavBarVisible={isNavBarVisible}/>
            </div>
            
        </div>
            
    );
}