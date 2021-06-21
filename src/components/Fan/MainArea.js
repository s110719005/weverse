import { useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from 'antd';
import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"
import AddPostCard from "./AddPostCard";
// import MomentList from "./MomentList";
import FanPostList from "./FanPostList";



function MainArea({isNavBarVisible}) {
    
    const closeNav = useSpring({
        // from: { opacity: 0 },
        // to: { opacity: 1 }
        paddingLeft: !isNavBarVisible?"2rem":"3rem",
        paddingRight: !isNavBarVisible?"2rem":"3rem",
      });

      function onChange(checked) {
        console.log(`switch to ${checked}`);
      }
    return (
        <animated.div  style={closeNav} className="mainarea artist-mainarea">
           
       
        {isNavBarVisible ? true : false }
            <div className="text-white artist-title-text">
                BTS's Fans Post
            </div>
            <div>
                <AddPostCard/>
            </div>
            
            <div className = "artist-post">
                <div className="text-white artist-post-title">
                    Post
                </div>
                <FanPostList/>
            </div>
            
            
            
            
       
        </animated.div>
            
    );
}

export default MainArea;