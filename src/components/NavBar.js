import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import homeIcon from '../assets/images/home_icon.svg';
import categoryIcon from '../assets/images/category_icon.svg';
import CartIcon from './CartIcon';
import Categorias from './Categorias';

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__links roundBtn">
                    <Link to="/">
                        <img src={homeIcon} alt="Inicio" />
                    </Link>
                </li>
                <li className="navbar__links roundBtn">
                    <Link to="/categorias">
                        <img src={categoryIcon} alt="Categorias" />
                    </Link>
                </li>
                <li className="navbar__links roundBtn">
                    <Link to="/cart">
                        <CartIcon />
                    </Link>
                </li>   
            </ul>
            <Switch>
                <Route exact path="/" />
                <Route path="/categorias" component={Categorias} />
                <Route path="/cart" />
            </Switch>
        </nav>
    );
}

export default NavBar;