import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import thumbnail1 from "../img/thumbnail/01.jpg";
import NavItem from "./NavItem";
export default function ArtistList() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div className="navbar-artistlist">
            <div className="navbar-artistlist-topic navbar-artistlist-text">
                Artist 
            </div>
            <NavItem to="/Shop" className="navbar-artistname-container-inactive" activeClassName="navbar-artistname-container-active">
                <div className="navbar-artistname-container">
                        <img src="https://github.com/unbeliebubble/img/blob/main/artist_logo/logo_bts.jpeg?raw=true" alt="Background" className="navbar-artistlist-thumbnail"/>
                        <div className="navbar-artistlist-text">
                            BTS
                        </div>
                </div>
            </NavItem>
            <NavItem to="/txt" className="navbar-artistname-container-inactive" activeClassName="navbar-artistname-container-active">
                <div className="navbar-artistname-container">
                        <img src="https://github.com/unbeliebubble/img/blob/main/artist_logo/logo_txt.jpeg?raw=true" alt="Background" className="navbar-artistlist-thumbnail"/>
                        <div className="navbar-artistlist-text">
                            TXT
                        </div>
                </div>
            </NavItem>
            <NavItem to="/gfriend" className="navbar-artistname-container-inactive" activeClassName="navbar-artistname-container-active">
                <div className="navbar-artistname-container">
                        <img src="https://github.com/unbeliebubble/img/blob/main/artist_logo/logo_gfriend.jpeg?raw=true" alt="Background" className="navbar-artistlist-thumbnail"/>
                        <div className="navbar-artistlist-text">
                            Gfriend
                        </div>
                </div>
            </NavItem>
            <NavItem to="/seventeen" className="navbar-artistname-container-inactive" activeClassName="navbar-artistname-container-active">
                <div className="navbar-artistname-container">
                        <img src="https://github.com/unbeliebubble/img/blob/main/artist_logo/logo_seventeen.png?raw=true" alt="Background" className="navbar-artistlist-thumbnail"/>
                        <div className="navbar-artistlist-text">
                            Seventeen
                        </div>
                </div>
            </NavItem>
           
            
            
            
            
        </div>
    );
}