import { useContext,useState } from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";
import WeverseNavbar from "../components/Navbar/Navbar";
import MainArea from "../components/MainArea";

//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  return (
    <Layout className="container main-layout">
      <WeverseHeader setIsNavBarVisible={setIsNavBarVisible} isNavBarVisible={isNavBarVisible}/>
      <Layout className="layout-content">
        <Layout className="layout-content-gradient">
          <WeverseNavbar isNavBarVisible={isNavBarVisible}/>
          <MainArea isNavBarVisible={isNavBarVisible}/>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
