import { useContext,useState } from "react";
import { Layout } from 'antd';
import LoginCard from "../components/Login/LoginCard";
import WeverseFooter from "../components/Navbar/Footer";
import { Link,useHistory  } from "react-router-dom";

import * as QueryString from "query-string";


//import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Welcome(props) {
  //const { state: { page: { title, products } } } = useContext(StoreContext);
  const { redirect } = QueryString.parse(props.location.search);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  return (
    <Layout className="container main-layout">
        <div className="login-main-area">
            <div className="login-card text-white welcome-card">
                <div className="welcome-title">
                    Complete!
                </div>
                <div className="welcome-content"> 
                    Welcome to
                    <div className="login-logo" >
                    <Link to={"/"}>
                        Weverse 
                    </Link>
                </div> 
                </div>
                <div className="welcome-btn">
                    <Link to="/LogIn">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
        <div className="login-footer-container">
           <WeverseFooter/>
        </div>
      
    </Layout>
  );
}

export default Welcome;
