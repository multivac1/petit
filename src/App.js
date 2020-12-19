/* Styles */
import './assets/css/main.css';
import './assets/css/home.css';
import './assets/css/navbar.css';
import './assets/css/page.css';
import './assets/css/buttons.css';
import './assets/css/itemCount.css';
import './assets/css/item.css';
import './assets/css/detailContainer.css';
import './assets/css/cart.css';
import './assets/css/spinner.css';
import './assets/css/categoryName.css';
import './assets/css/checkout.css';
import './assets/css/order.css';
import './assets/css/searchItems.css';
/* Components */
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout'; 
import Order from './components/Order';
/* Router */
import { BrowserRouter, Switch, Route} from 'react-router-dom';
/* Context */
import CartContextProvider from './contexts/CartContext';
import SearchContextProvider from './contexts/SearchContext';

function App() {

  return (
    <CartContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />       
            <Route path="/categories/:key" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/Item/:id" component={ItemDetailContainer} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order" component={Order} />
          </Switch>
          <NavBar />
        </BrowserRouter>
      </SearchContextProvider>
    </CartContextProvider>
  );
}

export default App;
