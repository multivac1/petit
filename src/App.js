/* Styles */
import './assets/css/main.css';
import './assets/css/navbar.css';
import './assets/css/home.css';
import './assets/css/buttons.css';
import './assets/css/itemCount.css';
import './assets/css/item.css';
/* Components */
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categorias from './components/Categorias';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
/* Router */
import { BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />       
        <Route path="/categorias" component={Categorias} />
        <Route path="/cart" component={Cart} />
        <Route path="/Item/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
