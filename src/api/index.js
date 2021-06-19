import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import products from "../json/btsProducts.json";
import txt from "../json/btsBaby.json";
import gfriend from "../json/btsWinter.json";
import seventeen from "../json/btsBubble.json";
import jsonInfo from "../json/jsonInfo.json";


// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

export const getArtistJSON = (url) => {
  switch (url) {
    case "/Shop":
      return products;
    case "/txt":
      return txt;
    case "/gfriend":
      return gfriend;
    case "/seventeen":
      return seventeen;
    
    default:
      return products;
  }
};
// REFERENCE PRODUCTS
const productsCollectionRef = firebase.firestore().collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");
//
const allOrdersCollectionRef = firebase.firestore().collection("allOrders");
//MOMENT REFERENCE
const allArtistPostCollectionRef = firebase.firestore().collection("allArtistPost");
const BTSDocRef = allArtistPostCollectionRef.doc("BTS");
const allBTSMomentsCollectionRef = BTSDocRef.collection("allArtist");




//REFERENCE AUTH
const auth = firebase.auth();


export const feedProducts = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;

    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  //console.log(jsonInfo.find(element => element.url === url));
  const collectionName = collection.name || "products";
  //const collectionName = "allProducts";
  
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "products")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}



export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}

export const registerWithEmailPassword = async (email, password, name) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({
    displayName: name,
  })
  return user;
}

export const signOut = () => {
  auth.signOut();
}

export const checkLoginApi = () => {
  const user = auth.currentUser;
  return user.uid?  true : false;
}
//order
export const createOrderApi = async (order) => {
  const user = auth.currentUser.uid;
  const orderRef = await allOrdersCollectionRef.doc();
  const id = orderRef.id;
  // Store Data for Aggregation Queries
  await orderRef.set({
    ...order,
    id,
    user
  });
  return { ...order, id };
}



export const getMoments = async(url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = "allArtistPost";

  let btsCollection = [];

  let querySnapshot;
  if(collectionName === "allArtistPost")
    querySnapshot = await allBTSMomentsCollectionRef.get();
    querySnapshot.forEach((doc) => {
      btsCollection.push(doc.data());
      });
  return btsCollection;
}

export const getMomentById = async (momentId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allBTSMomentsCollectionRef.doc(momentId).get();
  return doc.data()
}