import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import PageList from "./PageList"
import ArtistList from "./ArtistList";
import WeverseFooter from "./Footer";
//import { Keyframes, animated } from 'react-spring/renderprops';
import {Spring} from 'react-spring/renderprops';
import {useSpring, animated} from 'react-spring'


const NavbarItem = () => {
    return (
       
        <div className="Navbar">


            <PageList/>
            <div className="navbar-line"> </div>
            <ArtistList />
            <div className="navbar-line"></div>
            <WeverseFooter/>
        </div>

        
    );
}


export default function Navbar({isNavBarVisible}) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    const closeNav = useSpring({
        // from: { opacity: 0 },
        // to: { opacity: 1 }
        opacity: !isNavBarVisible?0.5:1,
        width:!isNavBarVisible?"0rem":"15rem",
        paddingLeft: !isNavBarVisible?"0rem":"1.5rem",
        paddingRight: !isNavBarVisible?"0rem":"1.5rem",
      });
    return (
        // <Spring
        //   to={{
        //     left: isNavBarVisible ? '0px' : '-200px',
        //     opacity: isNavBarVisible ? 1 : 0
        //   }}
        //   children={NavbarItem}
        // />

        //style={closeNav}


        <animated.div  style={closeNav} className="Navbar">

            {isNavBarVisible ? true : false }
            <PageList/>
            <div className="navbar-line"> </div>
            <ArtistList />
            <div className="navbar-line"></div>
            <WeverseFooter/>
        </animated.div>
        
    );
}

