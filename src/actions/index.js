import {
    SET_PAGE_CONTENT,
    SET_NAVBAR_ACTIVEITEM,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    SET_PRODUCT_DETAIL,
  } from "../utils/constants";

  import products from "../json/btsProducts.json";

  export const setProductDetail = (dispatch, productId, qty) => {
    const product = products.find(
      x => x.id === productId
    );
    
    if(qty === 0 && product.countInStock > 0)
        qty = 1;
  
    dispatch({
      type: SET_PRODUCT_DETAIL,
      payload: {
        product,
        qty,
      }
    })
  }
  
  export const pageContentsSet = (dispatch, title, products) => {
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, products },
    });
  };
 