import { createContext,useReducer } from "react";
import products from "../json/btsProducts.json";
import useReducerWithThunk from "use-reducer-thunk";

import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_PRODUCT_DETAIL,
  BEGIN_PRODUCTS_REQUEST,
  SUCCESS_PRODUCTS_REQUEST,
  FAIL_PRODUCTS_REQUEST,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  LOGOUT_REQUEST,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  BEGIN_ORDER_CREATE,
  SUCCESS_ORDER_CREATE,
  FAIL_ORDER_CREATE,
  RESET_ORDER,
  EMPTY_CART,
  //moment
  BEGIN_MOMENT_REQUEST,
  SUCCESS_MOMENT_REQUEST,
  FAIL_MOMENT_REQUEST,
  SET_MOMENT_CONTENT,
  SET_MOMENT_DETAIL,
  //artist post
  BEGIN_ARTISTPOST_REQUEST,
  SUCCESS_ARTISTPOST_REQUEST,
  FAIL_ARTISTPOST_REQUEST,
  SET_ARTISTPOST_CONTENT,
} from "../utils/constants";


 export const StoreContext = createContext();
//  let cartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
  let cartItems;
  try{
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (!cartItems) cartItems = [];
  } catch(e) {
    cartItems = [];
  }

  let shippingAddress;
  try {
    shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
  } catch(e) {
    shippingAddress = {};
  }

  let userInfo;
  try {
    userInfo =  JSON.parse(localStorage.getItem("userInfo"));
  } catch(e) {
    userInfo = null;
  }

  let orderInfo_order;
  try {
    orderInfo_order = JSON.parse(localStorage.getItem('orderInfo'));
  } catch(e) {
    orderInfo_order = { id: "" };
  }

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
    typ: "",
    typNum:0
  },
  cart: {
    cartItems,
    shippingAddress,
    paymentMethod: 'Google',
  },
  //cartItems,
  navBar: {
    activeItem: "/",
  },
  requestProducts: {
    loading: false,
    error: null,
  },
  userSignin: {
    loading: false,
    userInfo,
    error: "",
  },
  userRegister: {
    loading: false,
    userInfo: null,
    error: "",
  },
  orderInfo: {
    loading: false,
    order: orderInfo_order,
    success: false,
    error: null,
  },
  orderDetail: {
    loading: true,
    order: { cartItems: []},
    error: null,
  },
  //moment
  requestMoments: {
    loading: false,
    error: null,
  },
  momentList:{
    moments:[]
  },
  momentDetail:{
    moment:{
      date:null,
      image:"",
      like:0
    },
    thumbnail:"",
    stageName:""
  },
  //artist post
  artistPostList:{
    artistPosts:[]
  },
  requestArtistPosts: {
    loading: false,
    error: null,
  },
  
};

function reducer(state, action) {
  switch (action.type) {

    case ADD_CART_ITEM:
      const item = action.payload;
      const product = state.cart.cartItems.find((x) => x.id === item.id);
      if (product) {
        cartItems = state.cart.cartItems.map((x) =>
          x.id === product.id ? item : x
        );
        return { ...state, cart: { ...state.cart, cartItems } };
      }
      cartItems = [...state.cart.cartItems, item];
      return { ...state, cart: { ...state.cart, cartItems }};

    case REMOVE_CART_ITEM:
      cartItems = state.cart.cartItems.filter((x) => x.id !== action.payload);
      return { ...state, cart: { ...state.cart, cartItems } };
    case EMPTY_CART:
      cartItems = [];
      return { ...state, cart: { ...state.cart, cartItems } };
    case SET_PAGE_CONTENT:
      return {
        ...state,
        page: action.payload,
      };
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
      };
    case SET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    case BEGIN_PRODUCTS_REQUEST:
      return { ...state, requestProducts: { ...state.requestProducts, loading: true } }
    case SUCCESS_PRODUCTS_REQUEST:
      return { ...state, requestProducts: { ...state.requestProducts, loading: false } }
    case FAIL_PRODUCTS_REQUEST:
      return { ...state, requestProducts: { ...state.requestProducts, loading: false, error: action.payload } }
    case BEGIN_LOGIN_REQUEST:
      return { ...state, userSignin: { ...state.userSignin, loading: true } };
    case SUCCESS_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
    case LOGOUT_REQUEST:
      cartItems = [];
      return {
        ...state,
        cartItems,
        userSignin: {
          ...state.userSignin,
          userInfo: null,
        },
      };    
    case BEGIN_REGISTER_REQUEST:
      return { ...state, userRegister: { ...state.userRegister, loading: true } };
    case SUCCESS_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
        userSignin: {
          ...state.userSignin,
          userInfo: action.payload,
        }
      };
    case FAIL_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
      case BEGIN_ORDER_CREATE:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          loading: true,
          success: false,
        }
      };

    case SUCCESS_ORDER_CREATE:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          loading: false,
          order: action.payload,
          success: true,
          error: null,
        },
      };
    case FAIL_ORDER_CREATE:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          loading: false,
          order: { id: "" },
          success: false,
          error: action.payload,
        },
      };
    case RESET_ORDER:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          loading: false,
          order: { id: "" },
          success: false,
        },
      };
    ////////////MOMENT////////////
    
    case BEGIN_MOMENT_REQUEST:
      return { ...state, requestMoments: { ...state.requestMoments, loading: true } }
    case SUCCESS_MOMENT_REQUEST:
      return { ...state, requestMoments: { ...state.requestMoments, loading: false } }
    case FAIL_MOMENT_REQUEST:
      return { ...state, requestMoments: { ...state.requestMoments, loading: false,error: action.payload } }
    case SET_MOMENT_CONTENT:
      return{
        ...state,
        momentList: action.payload,
      }
    case SET_MOMENT_DETAIL:
      return{
        ...state,
        momentDetail:action.payload
      }
    ////////////MOMENT////////////
    ////////////ARTIST POST////////////
    case BEGIN_ARTISTPOST_REQUEST:
      return { ...state, requestArtistPosts: { ...state.requestArtistPosts, loading: true } }
    case SUCCESS_ARTISTPOST_REQUEST:
      return { ...state, requestArtistPosts: { ...state.requestArtistPosts, loading: false } }
    case FAIL_ARTISTPOST_REQUEST:
      return { ...state, requestArtistPosts: { ...state.requestArtistPosts, loading: false,error: action.payload } }
    case SET_ARTISTPOST_CONTENT:
      return{
        ...state,
        artistPostList: action.payload,
      }
    ////////////ARTIST POST////////////
      




    default:
      return state;
  }
}


export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
