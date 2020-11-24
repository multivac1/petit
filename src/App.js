/* Styles */
import './assets/css/main.css';
import './assets/css/navbar.css';
import './assets/css/page.css';
import './assets/css/buttons.css';
import './assets/css/itemCount.css';
import './assets/css/item.css';
import './assets/css/detailContainer.css';
import './assets/css/cart.css';
import './assets/css/spinner.css';
/* Components */
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categorias from './components/Categorias';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
/* Router */
import { BrowserRouter, Switch, Route} from 'react-router-dom';
/* Context */
import CartContextProvider from './context/CartContext';


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />       
          <Route path="/categorias" component={Categorias} />
          <Route path="/cart" component={Cart} />
          <Route path="/Item/:id" component={ItemDetailContainer} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
