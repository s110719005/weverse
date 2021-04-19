import { useState,useContext } from "react";
import { Drawer } from "antd";
import { Select } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
//import ProductList from "./ProductList";
import Layout from "antd/lib/layout/layout";
//import Viewpager from "./GestureCarousel";
import { Carousel ,Image} from 'antd';

import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"
import CarouselArtists from "./CarouselArtists";
import CarouselNewContent from "./CarouselNewContent";
import CarouselShop from "./CarouselShop";
import CarouselMusic from "./CarouselMusic";
const { Option } = Select;

const { Search } = Input;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

const onSearch = value => console.log(value);

const contentStyle = {
    height: '22rem',
    color: '#fff',
    textAlign: 'center',
  };


function MainArea({isNavBarVisible}) {
    const { state: { page: { title, products } } } = useContext(StoreContext);
    const closeNav = useSpring({
        // from: { opacity: 0 },
        // to: { opacity: 1 }
        paddingLeft: !isNavBarVisible?"2rem":"3rem",
        paddingRight: !isNavBarVisible?"2rem":"3rem",
      });
    return (
        <animated.div  style={closeNav} className="mainarea">
           
       
        {isNavBarVisible ? true : false }
            <div className="mainarea-topic-text">
                Artists
            </div>
            {/* autoplay */}
            <CarouselArtists/>
            <div className="mainarea-topic-text">
                New Content
            </div>
            <CarouselNewContent/>
            <div className="mainarea-topic-text">
               Weverse Shop
            </div>
            <CarouselShop/>
            <div className="mainarea-topic-text">
                Music
            </div>
            <CarouselMusic/>
            
            
            
            
       
        </animated.div>
            
    );
}

export default MainArea;