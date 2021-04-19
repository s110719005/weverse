import { useContext,useState,useEffect } from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";
import WeverseNavbar from "../components/Navbar/Navbar";
import ProductDetail from "../components/Shop/ProductDetail";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store";
import NavbarPhone from "../components/Navbar/NavbarPhone";

//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function ProductDetailPage({ match }) {
    const { dispatch } = useContext(StoreContext);   
    useEffect(() => setProductDetail(dispatch, match.params.productId, 0),[]);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  return (
    <Layout className="container main-layout">
          <NavbarPhone isNavBarVisible={!isNavBarVisible}/>
      
      <WeverseHeader setIsNavBarVisible={setIsNavBarVisible} isNavBarVisible={isNavBarVisible}/>
      <Layout className="layout-content">
          <WeverseNavbar isNavBarVisible={isNavBarVisible}/>
          <ProductDetail/>
      </Layout>
    </Layout>
  );
}

export default ProductDetailPage;
