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
    EMPTY_CART,
    RESET_ORDER,
    BEGIN_ORDER_DETAIL,
    SUCCESS_ORDER_DETAIL,
    FAIL_ORDER_DETAIL,
    SAVE_SHIPPING_ADDRESS,
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
    //reply user info
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

  import {
    getProductById,
    getProducts,
    feedProducts,
    signInWithEmailPassword,
    registerWithEmailPassword,
    signOut,
    checkLoginApi,
    createOrderApi,
    //moment
    getMoments,
    getMomentById,
    //artist post
    getArtistPosts,
    //user info
    getUserInfoById,
    //user info update
    updateUserInfoApi,
    //reply user info
    getUserNameByPostId,
    //create fan post
    createFanPostApi,
    //fan post
    getFanPosts,
  }from "../api"

  //import products from "../json/btsProducts.json";

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
  };
  
  export const pageContentsSet = async(dispatch,url, title, products) => {
    products = await getProducts(url);
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, products },
    });
  };

  export const setPage = async (dispatch, url, title) => {
    let products = [];
    dispatch({ type: BEGIN_PRODUCTS_REQUEST });
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
      dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
      
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
    }
  };


 
  export const activeNavItemSet = (dispatch, activeNavItem) => {
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: activeNavItem,
    });
  };

  export const loginToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_LOGIN_REQUEST });
    try {
      const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
      dispatch({
        type: SUCCESS_LOGIN_REQUEST,
        payload: user.user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_LOGIN_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  
  export const registerToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_REGISTER_REQUEST });
    try {
      const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name,userInfo.birthday,userInfo.gender,userInfo.address,userInfo.phone);
      console.log(userInfo)
      dispatch({
        type: SUCCESS_REGISTER_REQUEST,
        payload: user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_REGISTER_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  export const logoutFromFirebase = async (dispatch) => {
    signOut();
    dispatch({ type: LOGOUT_REQUEST });
  }

  export const checkLogin = (dispatch) => {
    const isLogin = checkLoginApi();
    if(!isLogin) {
      localStorage.removeItem('orderInfo')
      dispatch({ type: LOGOUT_REQUEST });    
    }
    return isLogin;
  }

  export const createOrder = async (dispatch, cart) => {
    dispatch({ type: BEGIN_ORDER_CREATE });
    try {
      const item = {
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        // paymentMethod: cart.paymentMethod,
        // itemsPrice: cart.itemsPrice,
        // shippingPrice: cart.shippingPrice,
        // taxPrice: cart.taxPrice,
        // totalPrice: cart.totalPrice,
      };    
      const orderInfo = await createOrderApi(item);
      dispatch({ 
        type: SUCCESS_ORDER_CREATE, 
        payload: orderInfo 
      });
      dispatch({ type: EMPTY_CART,})
      localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
      localStorage.removeItem("cartItems");
      return orderInfo;
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_ORDER_CREATE, payload: error });
      return null;
    }  
  };
  

  export const saveShippingAddress = (dispatch, shippingAddress) => {
    dispatch({
      type: SAVE_SHIPPING_ADDRESS,
      payload: shippingAddress,
    });
    localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
  }

  ////////moment////////
  export const setMoment = async (dispatch, url) => {
    let moments = [];
    dispatch({ type: BEGIN_MOMENT_REQUEST });
    try {
      moments = await getMoments(url);
      dispatch({
        type: SET_MOMENT_CONTENT,
        payload: { moments },
      });
      
      dispatch({ type: SUCCESS_MOMENT_REQUEST });
      
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_MOMENT_REQUEST, payload: error });
    }
  };
  ////////moment////////
  ////////artist post////////
  export const setArtistPost = async (dispatch, url) => {
    let artistPosts = [];
    dispatch({ type: BEGIN_ARTISTPOST_REQUEST });
    try {
      artistPosts = await getArtistPosts(url);
      dispatch({
        type: SET_ARTISTPOST_CONTENT,
        payload: { artistPosts },
      });
      
      dispatch({ type: SUCCESS_ARTISTPOST_REQUEST });
      
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_ARTISTPOST_REQUEST, payload: error });
    }
  };
  ////////artist post////////
  ////////user info////////
  export const setUserInfo = async (dispatch) => {
    let info = {};

    dispatch({ type: BEGIN_USERINFO_REQUEST });
    try {
      info = await getUserInfoById();
        dispatch({
          type: SET_USERINFO_CONTENT,
          payload: {
            info
          }
        })
        console.log(info);
      dispatch({ type: SUCCESS_USERINFO_REQUEST });
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_USERINFO_REQUEST, payload: error });
    }
  }
  ////////user info////////
  ////////user info update////////
  export const updateUserInfo = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_UPDATE_USERINFO });
    try {
  //,,,,,,,,notify2,notify3

      const user = await updateUserInfoApi(
        userInfo.email,
        userInfo.password,
        userInfo.name,
        userInfo.nickName,
        userInfo.phoneNumber,
        userInfo.address,
        userInfo.address2,
        userInfo.birthday,
        userInfo.gender,
        userInfo.notify1,
        userInfo.notify2,
        userInfo.notify3,

      );
      dispatch({
        type: SUCCESS_UPDATE_USERINFO,
        payload: user.providerData[0],
      });
    } catch (e) {
      dispatch({
        type: FAIL_UPDATE_USERINFO,
        payload: e.message,
      });
      console.log(e);
    }
  };

  ////////reply user info////////
  export const setReplyUserName = async (dispatch,uid) => {
    
    let user = {};
    let name = "";
    dispatch({ type: BEGIN_REPLYUSERINFO_REQUEST });
    try {
      user = await getUserNameByPostId(uid);
      name  = user.nickName;
        dispatch({
          type: SET_REPLYUSERINFO_CONTENT,
          payload: {
            name
          }
        })
        //console.log(info);
      dispatch({ type: SUCCESS_REPLYUSERINFO_REQUEST 
      });
      console.log(user.nickName);
      
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_REPLYUSERINFO_REQUEST, payload: error });
    }
  }
  ////////reply user info////////
  ////////create fan post////////
  export const createFanPost = async (dispatch, content) => {
    dispatch({ type: BEGIN_FANPOST_CREATE });
    try {
        
      await createFanPostApi(content);
      dispatch({ 
        type: SUCCESS_FANPOST_CREATE, 
        //payload: fanpost
      });
      
      //return orderInfo;
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_FANPOST_CREATE, payload: error });
      return null;
    }  
  };
  ////////create fan post////////
  ////////fan post////////
  export const setFanPost = async (dispatch) => {
    let fanPosts = [];
    dispatch({ type: BEGIN_FANPOST_REQUEST });
    try {
      fanPosts = await getFanPosts();
      dispatch({
        type: SET_FANPOST_CONTENT,
        payload: { fanPosts },
      });
      
      dispatch({ type: SUCCESS_FANPOST_REQUEST });
      
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_FANPOST_REQUEST, payload: error });
    }
  };
  ////////fan post////////

