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
  //user info
  BEGIN_USERINFO_REQUEST,
  SUCCESS_USERINFO_REQUEST,
  FAIL_USERINFO_REQUEST,
  SET_USERINFO_CONTENT,
  //user info update
  BEGIN_UPDATE_USERINFO,
  SUCCESS_UPDATE_USERINFO,
  FAIL_UPDATE_USERINFO,
  //user info
  BEGIN_REPLYUSERINFO_REQUEST,
  SUCCESS_REPLYUSERINFO_REQUEST,
  FAIL_REPLYUSERINFO_REQUEST,
  SET_REPLYUSERINFO_CONTENT,
  //create fan post
  BEGIN_FANPOST_CREATE,
  SUCCESS_FANPOST_CREATE,
  FAIL_FANPOST_CREATE,
  //fan post
  BEGIN_FANPOST_REQUEST,
  SUCCESS_FANPOST_REQUEST,
  FAIL_FANPOST_REQUEST,
  SET_FANPOST_CONTENT,
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
  //user info
  userInfo:{
    info:{}
  },
  requestUserInfo: {
    loading: false,
    error: null,
  },
  //reply user info
  replyName:"",
  //create fan post
  fanPost:{
    post:{}
  },
  createFanPost:{
    loading: false,
    error: null,
    success: false,
  },
  //fan posr
  fanPostList:{
    fanPosts:[]
  },
  requestFanPosts: {
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
    ////////////USER INFO////////////
    case BEGIN_USERINFO_REQUEST:
      return { ...state, requestUserInfo: { ...state.requestUserInfo, loading: true } }
    case SUCCESS_USERINFO_REQUEST:
      return { ...state, requestUserInfo: { ...state.requestUserInfo, loading: false } }
    case FAIL_USERINFO_REQUEST:
      return { ...state, requestUserInfo: { ...state.requestUserInfo, loading: false,error: action.payload } }
    case SET_USERINFO_CONTENT:
      return{
        ...state,
        userInfo: action.payload,
      }
    ////////////USER INFO////////////
    ////////////USER INFO UPDATE////////////
    case BEGIN_UPDATE_USERINFO:
      return { ...state, userSignin: { ...state.userSignin, loading: true } };
    case SUCCESS_UPDATE_USERINFO:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_UPDATE_USERINFO:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          error: action.payload,
        },
      };
    ////////////USER INFO UPDATE////////////
    ////////////REPLY USER INFO////////////
    case BEGIN_REPLYUSERINFO_REQUEST:
      return { ...state, requestUserInfo: { ...state.requestUserInfo, loading: true } }
    case SUCCESS_REPLYUSERINFO_REQUEST:
      return { ...state, requestUserInfo: { ...state.requestUserInfo, loading: false } }
    case FAIL_REPLYUSERINFO_REQUEST:
      return { ...state, requestUserInfo: { ...state.requestUserInfo, loading: false,error: action.payload } }
    case SET_REPLYUSERINFO_CONTENT:
      return{
        ...state,
        replyName: action.payload,
      }
    ////////////REPLY USER INFO////////////
    ////////////CREATE FAN POST////////////
    case BEGIN_FANPOST_CREATE:
      return {
        ...state,
        createFanPost: {
          ...state.createFanPost,
          loading: true,
          success: false,
        }
      };
      // fanPost:{
      //   post:{}
      // },
      // createFanPost:{
      //   loading: false,
      //   error: null,
      // },
    case SUCCESS_FANPOST_CREATE:
      return {
        ...state,
        createFanPost: {
          ...state.createFanPost,
          loading: false,
          fanPost: action.payload,
          success: true,
          error: null,
        },
      };
    case FAIL_FANPOST_CREATE:
      return {
        ...state,
          createFanPost: {
          ...state.createFanPost,
          loading: false,
          fanpost: {},
          success: false,
          error: action.payload,
        },
      };
    ////////////CREATE FAN POST////////////
    ////////////FAN POST////////////
    case BEGIN_FANPOST_REQUEST:
      return { ...state, requestFanPosts: { ...state.requestFanPosts, loading: true } }
    case SUCCESS_FANPOST_REQUEST:
      return { ...state, requestFanPosts: { ...state.requestFanPosts, loading: false } }
    case FAIL_FANPOST_REQUEST:
      return { ...state, requestFanPosts: { ...state.requestFanPosts, loading: false,error: action.payload } }
    case SET_FANPOST_CONTENT:
      return{
        ...state,
        fanPostList: action.payload,
      }
    ////////////FAN POST////////////
    
    
    
    

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
