import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

export default function Footer() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div className="navbar-footer">
            <Link to="/Feeder">
                <div className="navbar-footer-text">
                © WEVERSE COMPANY Inc.
                </div>
            </Link>
            
           
            
            
            
            
        </div>
    );
}