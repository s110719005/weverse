import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import PageList from "./PageList"
import ArtistList from "./ArtistList";
import WeverseFooter from "./Footer";
//import { Keyframes, animated } from 'react-spring/renderprops';
import {Spring} from 'react-spring/renderprops';
import {useSpring, animated} from 'react-spring'






export default function NavbarPhone({isNavBarVisible}) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    const closeNav = useSpring({
        // from: { opacity: 0 },
        // to: { opacity: 1 }
        //opacity: !isNavBarVisible?0.5:1,
        paddingTop:!isNavBarVisible?"0rem":"1.5rem",
        //paddingbottom:!isNavBarVisible?"0px":"100px",
       // marginTop:!isNavBarVisible?"0rem":"70px",
        borderColor:!isNavBarVisible?"#2e2e2e":"white",
        height:!isNavBarVisible?"0vh":"100vh",
        paddingLeft: !isNavBarVisible?"0rem":"1.5rem",
        paddingRight: !isNavBarVisible?"0rem":"1.5rem",
      });
    return (
        
        <div>
            {/* style={closeNav} */}
            <animated.div  style={closeNav} className="Navbar-phone">

                {isNavBarVisible ? true : false }
                
                <PageList/>
                <div className="navbar-line"> </div>
                <ArtistList />
                <div className="navbar-line"></div>
                <WeverseFooter/>
            </animated.div>
        </div>

        
        
    );
}

