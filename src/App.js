import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Shop from './pages/Shop'
import ProductDetail from "./pages/ProductDetailPage";
import { StoreProvider } from "./store";
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';
import Feeder from './pages/Feeder';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Welcome from './pages/Welcome';
import Artist from './pages/Artist';
import Fan from './pages/Fan';

function App() {
  return (
     <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Artist" component={Artist} />
          <Route exact path="/Fan" component={Fan} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/Account" component={Account}/>
          <Route exact path="/Welcome" component={Welcome}/>
          {/* <Route exact path="/Account" component={Account} /> */}
          <Route exact path="/Feeder" component={Feeder} />
          <Route exact path="/CheckOut" component={CheckOut} />
          <Route exact path="/Shop/:pageName" component={Shop} />
          <Route path="/product/:productId" component={ProductDetail} />
          {/* <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/:pageName" component={Home} />
          <Route path="/product/:productId" component={Product} /> */}
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
