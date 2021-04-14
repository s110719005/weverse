import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingFilled,MenuOutlined } from '@ant-design/icons';
import { CartIcon } from "./Icons";
//import { StoreContext } from "../store";
//import CartSummary from "./CartSummary";
//import { pageContentsSet, activeNavItemSet } from "../actions";
//import { getJSON } from "../api";

export default function Header({ title }) {
  // const { dispatch } = useContext(StoreContext);
  // const onClickHeader = () => {
  //   pageContentsSet(dispatch, "NORDIC NEST Shopping Cart", getJSON("/"));
  //   activeNavItemSet(dispatch, "/");
  // };

  return (
    <div>
      <div className="header">
        <div className="header-wrap-left">
          <Link to="/">
            {/* <div className="header-icon">
              <CartIcon size={32} />
            </div> */}
            <MenuOutlined className="header-icon"/ >
          </Link>
        </div>
        <div className="header-wrap-middle">
          Weverse
        </div>  
        <div className="header-wrap-right">
          <Link to="/">
            <ShoppingFilled className="header-icon"/ >
          </Link>
          <Link to="/">
            <ShoppingFilled className="header-icon"/ >
          </Link>
          <Link to="/">
            <ShoppingFilled className="header-icon"/ >
          </Link>
        </div>
            
      </div>
      <hr className="hr-header-line" />
    </div>
  );
}
