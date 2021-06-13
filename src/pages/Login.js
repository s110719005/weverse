import { useContext,useState } from "react";
import { Layout } from 'antd';
import LoginCard from "../components/Login/LoginCard";
import WeverseFooter from "../components/Navbar/Footer";

import * as QueryString from "query-string";


//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Login(props) {
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  const { redirect } = QueryString.parse(props.location.search);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  return (
    <Layout className="container main-layout">
        <div className="login-main-area">
            <div className="login-card">
                <LoginCard redirect={redirect}/>
            </div>
        </div>
        <div className="login-footer-container">
           <WeverseFooter/>
        </div>
      
    </Layout>
  );
}

export default Login;
