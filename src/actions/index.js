import {
    SET_PAGE_CONTENT,
    SET_NAVBAR_ACTIVEITEM,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    SET_PRODUCT_DETAIL,
  } from "../utils/constants";

  import {
    getProductById,
    getProducts
  }from "../api"

  import products from "../json/btsProducts.json";

  export const addCartItem = (dispatch, product, qty,typ,typNum) => {
    const item = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
      typ,
      typNum
    };
    dispatch({
      type: ADD_CART_ITEM,
      payload: item,
    });
  };

  export const removeCartItem = (dispatch, productId) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: productId,
    });
  };

  export const setProductDetail = async(dispatch, productId, qty,typ,typNum) => {
    const product = await getProductById(productId);
    
    // const product = products.find(
    //   x => x.id === productId
    // );
    
    if(qty === 0 && product.countInStock > 0)
        qty = 1;
    if(typ===undefined) typ=product.type[0];
    if(typNum===undefined) typNum=0;
     
     
    dispatch({
      type: SET_PRODUCT_DETAIL,
      payload: {
        product,
        qty,
        typ,
        typNum
      }
    })
  }
  
  export const pageContentsSet = async(dispatch,url, title, products) => {
    products = await getProducts(url);
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, products },
    });
  };

  export const setPage = async (dispatch, url, title) => {
    let products = [];
    try {
      products = await getProducts(url);
      dispatch({
        type: SET_PAGE_CONTENT,
        payload: { title, products },
      });
      dispatch({
        type: SET_NAVBAR_ACTIVEITEM,
        payload: url,
      });
      
    } catch (error) {
      console.log(error);
    }
  }


 
  export const activeNavItemSet = (dispatch, activeNavItem) => {
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: activeNavItem,
    });
  };