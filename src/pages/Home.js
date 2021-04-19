import { useContext,useState } from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";
import WeverseNavbar from "../components/Navbar/Navbar";
import MainArea from "../components/Home/MainArea";
import NavbarPhone from "../components/Navbar/NavbarPhone";

//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
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

export default Home;
