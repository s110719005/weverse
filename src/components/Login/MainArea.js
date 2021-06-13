import { useState,useContext } from "react";

import { StoreContext } from "../../store"
import Footer from "../Navbar/Footer";
import LoginCard from "./LoginCard";


function MainArea() {
    const { state: { page: { title, products } } } = useContext(StoreContext);
    return (
        <div>

        <div className="login-main-area">
            <div className="login-card">
                <LoginCard/>
            </div>
        </div>
        <div className="login-footer-container">
            <Footer/>
        </div>
        </div>
            
    );
}

export default MainArea;