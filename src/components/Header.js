import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingOutlined,MenuOutlined,BellOutlined,UserOutlined,MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import { CartIcon } from "./Icons";

import { StoreContext } from "../store";
import CartSummary from "./Shop/CartSummary";
//import CartSummary from "./CartSummary";
//import { pageContentsSet, activeNavItemSet } from "../actions";
//import { getJSON } from "../api";

export default function Header({ setIsNavBarVisible,isNavBarVisible }) {
   const { dispatch } = useContext(StoreContext);
  // const onClickHeader = () => {
  //   pageContentsSet(dispatch, "NORDIC NEST Shopping Cart", getJSON("/"));
  //   activeNavItemSet(dispatch, "/");
  // };
  const [isOnTouch, setIsOnTouch] = useState(false);
  

  
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
        
        <div className="header-wrap-right">
          <CartSummary/>
          <Link to="/">
            <BellOutlined className="header-icon"/ >
          </Link>
          <div className="icon-user">

          <Link to="/">
            <UserOutlined className="header-icon"/ >
          </Link>
          </div>
        </div>

       
            
      </div>
      <hr className="hr-header-line" />
    </div>
  );
}
