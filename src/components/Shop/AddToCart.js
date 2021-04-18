import { useEffect, useContext } from "react";
import { Button, notification } from "antd"
import { StoreContext } from "../../store"
import { CartIcon } from "../Icons";
import { addCartItem } from "../../actions";

export default function AddToCart() {
  const { state: { cartItems, productDetail: { product, qty,typ,typNum } }, dispatch } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: 'Shopping Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    // openNotification();
    addCartItem(dispatch, product, qty,typ,typNum);
  };

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <div className="btn-hover-white text-white productdetail-card1-btn" onClick={addToCart}>
        Add to Bag
    </div>
    // <Button type="primary" className="btn-tocar" onClick={addToCart}>
    //   <CartIcon size={20} />
    //   <span style={{ marginLeft: 12 }}>Add To Shopping Bag</span>
    // </Button>
  );
}
