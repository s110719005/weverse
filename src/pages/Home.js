import { useContext } from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";
import WeverseNavbar from "../components/Navbar/Navbar";
import MainArea from "../components/MainArea";

//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  return (
    <Layout className="container main-layout">
      <WeverseHeader />
      <Layout className="layout-content">
        <WeverseNavbar />
        <Content>
          <MainArea />
        </Content>
        
      </Layout>
    </Layout>
  );
}

export default Home;
