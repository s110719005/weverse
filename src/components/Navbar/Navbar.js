import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import PageList from "./PageList"
import ArtistList from "./ArtistList";
import WeverseFooter from "./Footer";

export default function Navbar() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
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