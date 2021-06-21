import { useContext,useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { ShoppingOutlined,MenuOutlined,BellOutlined,UserOutlined,MenuFoldOutlined,MenuUnfoldOutlined,LoginOutlined } from '@ant-design/icons';
import { CartIcon } from "./Icons";

import { StoreContext } from "../store";
import CartSummary from "./Shop/CartSummary";
import { logoutFromFirebase} from "../actions";



export default function Header({ setIsNavBarVisible,isNavBarVisible }) {
  
  
  const { state: { userSignin: { userInfo },}, dispatch } = useContext(StoreContext);
  const [isOnTouch, setIsOnTouch] = useState(false);
  const history = useHistory();
  
  const handleLogout = () => {
    logoutFromFirebase(dispatch);
    history.push("/");
  };
  
  return (
    <div>
      <div className="header">
        <div className="header-wrap-left">
          
          
          <a
            onClick={() => {
              setIsNavBarVisible(!isNavBarVisible);
              console.log(isNavBarVisible);
            }}
            isOnTouch={isOnTouch}
          >
            <>
              {!isNavBarVisible ? (
                <MenuUnfoldOutlined className="header-icon"/>
              ):(
                <MenuFoldOutlined className="header-icon"/>
              )}
            </>
          </a>
        </div>
        <div className="header-wrap-middle" visible={isOnTouch}>
          Weverse
        </div>  

        
        
          {
            userInfo === null ? 
            (
              <div className="header-wrap-right header-wrap-right-sign text-white "> 
                <Link to="/Register?redirect=">
                  <div className="header-signup-btn text-white">
                    Sign Up
                  </div>
                </Link>
                <Link to="/Login?redirect=">
                  <div className="header-signin-btn">
                    Sign In
                  </div>
                </Link>
              </div>
            ) : 
            (
              <div className="header-wrap-right">
                <CartSummary/>
                <Link to="/">
                  <BellOutlined className="header-icon"/ >
                </Link>
                <div className="icon-user">
                  <Link to="/"
                    onClick={handleLogout}
                  >
                    <LoginOutlined className="header-icon"/>
                    {/* <UserOutlined / > */}
                  </Link>
                </div>
              </div>
            )
          }
          
       

       
            
      </div>
      <hr className="hr-header-line" />
    </div>
  );
}
