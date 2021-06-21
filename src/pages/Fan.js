import { useContext,useState,useEffect } from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";
import WeverseNavbar from "../components/Navbar/Navbar";
import MainArea from "../components/Fan/MainArea";
import NavbarPhone from "../components/Navbar/NavbarPhone";

import { StoreContext } from "../store"
import {setUserInfo,setFanPost} from "../actions"


const { Header, Content, Footer } = Layout;

function Fan() {
  const { state: { momentList:{moments} } , dispatch} = useContext(StoreContext);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  useEffect(() => {
    setUserInfo(dispatch);
    setFanPost(dispatch);
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

export default Fan;
