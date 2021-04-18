import { useState, useContext } from "react";
import { Badge } from "antd";
import { CartIcon } from "../Icons";
import CartModal from "./CartModal";
import { StoreContext } from "../../store"
import { Link } from "react-router-dom";
import { ShoppingOutlined,MenuOutlined,BellOutlined,UserOutlined,MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';

export default function CartSummary() {

  const { state: { cartItems } } = useContext(StoreContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const count = (cartItems.length > 0) ?
    cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;

  return (
    <>
    <CartModal isModalVisible = {isModalVisible} toggleModal = {toggleModal}/>
      <div onClick={toggleModal} className="header-cart-summary" >
        <Badge count={count} size={"small"} style={{ color: 'white', backgroundColor: '#9E90F2' }}>
          <ShoppingOutlined className="header-icon"/ >
        </Badge>
        {/* <p className="cart-summary-text"> Shopping bag </p> */}
      </div>
      
    </>
  );
}

{/* <Link to={`/shoppingCart`}>
          <CartIcon size={32} />
          </Link> */}