import { useContext,useState,useEffect } from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";
import WeverseNavbar from "../components/Navbar/Navbar";
import MainArea from "../components/Artist/MainArea";
import NavbarPhone from "../components/Navbar/NavbarPhone";

import { StoreContext } from "../store"
import {getTitle} from "../utils"
import {setMoment,setArtistPost,setUserInfo} from "../actions"


const { Header, Content, Footer } = Layout;

function Artist() {
  const { state: { momentList:{moments} } , dispatch} = useContext(StoreContext);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  useEffect(() => {
    const url = window.location.pathname;
    setMoment(dispatch,url);
    setArtistPost(dispatch,url);
    setUserInfo(dispatch);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <Layout className="container main-layout">
      <NavbarPhone isNavBarVisible={!isNavBarVisible}/>
      <WeverseHeader setIsNavBarVisible={setIsNavBarVisible} isNavBarVisible={isNavBarVisible}/>
      <Layout className="layout-content">
          <WeverseNavbar isNavBarVisible={isNavBarVisible}/>
          <MainArea isNavBarVisible={isNavBarVisible}/>
      </Layout>
      
    </Layout>
  );
}

export default Artist;
