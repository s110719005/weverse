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

 const initialState = {
  page: {
    title: "NORDIC NEST Shopping Cart",
    products,
  },
  productDetail: {
    product: {},
    qty: 1,
  },
};

function reducer(state, action) {
  switch (action.type) {
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
