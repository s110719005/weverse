import { useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import { Switch } from 'antd';
import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"
import MomentList from "./MomentList";
import ArtistPostList from "./ArtistPostList";



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
                Artist Post
            </div>
            <div className="artist-notification">
            <Switch defaultChecked onChange={onChange} />
            <div className="text-white artist-notification-text">
                Turn on their post notification
            </div>
            </div>
            <div className="artist-moment">
                <div className="text-white artist-moment-title">
                    Moment
                </div>
                <MomentList/>
            </div>
            <div className = "artist-post">
                <div className="text-white artist-post-title">
                    Post
                </div>
                <ArtistPostList/>
            </div>
            
            
            
            
       
        </animated.div>
            
    );
}

export default MainArea;