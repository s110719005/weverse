import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import thumbnail1 from "../img/thumbnail/01.jpg"

export default function ArtistList() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div className="navbar-artistlist">
            <div className="navbar-artistlist-topic navbar-artistlist-text">
                Artist 
            </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
           <div className="navbar-artistname-container">
                <img src={thumbnail1} alt="Background" className="navbar-artistlist-thumbnail"/>
                <div className="navbar-artistlist-text">
                    BTS
                </div>
           </div>
            
            
            
            
        </div>
    );
}