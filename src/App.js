import React, { Fragment } from 'react';
/* Styles */
import './assets/css/main.css';
import './assets/css/navbar.css';
import './assets/css/home.css';
import './assets/css/buttons.css';
import './assets/css/itemCount.css';
import './assets/css/item.css';
/* Components */
import Home from './components/Home';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';


function App() {
  return (
  <Fragment>
    
    <NavBar />      
    
    <Home 

      greeting="Impresiones 3D
      Grabado láser" 
      
    />
    
    </Fragment>
  );
}

export default App;
