import React, { Fragment } from 'react';
/* Styles */
import './assets/css/main.css';
import './assets/css/navbar.css';
import './assets/css/home.css';
/* Components */
import Home from './components/Home';
import NavBar from './components/NavBar';


function App() {
  return (
  <Fragment>
    
    <NavBar />      
    
    <Home greeting="Impresiones 3D
      Grabado láser" />
    
    </Fragment>
  );
}

export default App;
