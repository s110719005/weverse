import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

export default function PageList() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div className="navnar-pagelist">
            <Link to="/">
                <div className="navbar-pagelist-text">
                    Artist Post
                </div>
            </Link>
            <Link to="/">
                <div className="navbar-pagelist-text">
                    Fan Post
                </div>
            </Link>
            <Link to="/">
                <div className="navbar-pagelist-text">
                    Media
                </div>
            </Link>
            <Link to="/Shop">
                <div className="navbar-pagelist-text">
                    Shop
                </div>
            </Link>
            <Link to="/">
                <div className="navbar-pagelist-text">
                    Account
                </div>
            </Link>
            
            
            
        </div>
    );
}