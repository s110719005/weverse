import { useContext,useState,useEffect } from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";
import WeverseNavbar from "../components/Navbar/Navbar";
import MainArea from "../components/Account/MainArea";
import NavbarPhone from "../components/Navbar/NavbarPhone";

import { StoreContext } from "../store"
import {setUserInfo} from "../actions"


const { Header, Content, Footer } = Layout;

function Account() {
  const { state: { momentList:{moments} } , dispatch} = useContext(StoreContext);
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  useEffect(() => {
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

export default Account;
