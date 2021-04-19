import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Shop from './pages/Shop'
import ProductDetail from "./pages/ProductDetailPage";
import { StoreProvider } from "./store";
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';

function App() {
  return (
     <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/CheckOut" component={CheckOut} />
          <Route exact path="/:pageName" component={Shop} />
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
