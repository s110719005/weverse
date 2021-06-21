import { useState,useEffect, useContext  } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


import { StoreContext } from "../../store"
import { logoutFromFirebase} from "../../actions";

export default function PageList() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    const { state: { userSignin : { userInfo, remember } } } = useContext(StoreContext);
   const history = useHistory();

   const goToProfile = () => {
      history.push("/Login?redirect=Account");
   };

   useEffect(() => {
      if(remember)
         localStorage.setItem("userInfo", JSON.stringify(userInfo));
      else
       localStorage.removeItem("userInfo");
   }, [userInfo, remember]);
    return (
        <div className="navnar-pagelist">
            <Link to="/Artist">
                <div className="navbar-pagelist-text">
                    Artist Post
                </div>
            </Link>
            <Link to="/Login?redirect=Fan">
                <div className="navbar-pagelist-text">
                    Fan Post
                </div>
            </Link>
            <Link to="/">
                <div className="navbar-pagelist-text">
                    Media
                </div>
            </Link>
            <Link to="/Shop/BTS">
                <div className="navbar-pagelist-text">
                    Shop
                </div>
            </Link>
            <Link to="/Login?redirect=Account">
                <div className="navbar-pagelist-text">
                    Account
                </div>
            </Link>
            
            
            
        </div>
    );
}