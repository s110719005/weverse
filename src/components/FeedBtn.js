import { useState } from "react";
import { Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { feedProducts } from "../api";


export default function FeedBtn() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div className="feed-btn text-white"
       
        >
            <Button
             onClick={()=> feedProducts()}
            >
            Feed Me !
            </Button>
            
            
        </div>
    );
}