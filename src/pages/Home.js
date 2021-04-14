import { useContext } from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";

//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Home() {
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  return (
    <Layout className="container main-layout">
      <WeverseHeader />
      
    </Layout>
  );
}

export default Home;
