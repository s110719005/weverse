import { createContext,useReducer } from "react";
import products from "../json/btsProducts.json";

import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_PRODUCT_DETAIL,
} from "../utils/constants";


 export const StoreContext = createContext();
 let cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

 const initialState = {
  page: {
    title: "NORDIC NEST Shopping Cart",
    products,
  },
  productDetail: {
    product: {
      image:[],
      type:[]
    },
    qty: 1,
    typ: "None",
    typNum:0
  },
  cartItems,
  
};

function reducer(state, action) {
  switch (action.type) {

    case ADD_CART_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (product) {
        cartItems = state.cartItems.map((x) =>
          x.id === product.id ? item : x
        );
        return { ...state, cartItems };
      }
      cartItems = [...state.cartItems, item];
      return { ...state, cartItems };

    case REMOVE_CART_ITEM:
      cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      return { ...state, cartItems };
    case SET_PAGE_CONTENT:
      return {
        ...state,
        page: action.payload,
      };
    case SET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    default:
      return state;
  }
}


export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer,initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
