import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../assets/images/home_icon.svg';
import categoryIcon from '../assets/images/category_icon.svg';
import CartIcon from './CartIcon';

const NavBar = () => {
    
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__links roundBtn">
                        <NavLink to="/" activeClassName="navbar__selected--home">
                            <img src={homeIcon} alt="Inicio" />
                        </NavLink>
                    </li>
                    <li className="navbar__links roundBtn">
                        <NavLink to="/categorias" activeClassName="navbar__selected--categories">
                            <img src={categoryIcon} alt="Categorias" />
                        </NavLink>
                    </li>
                    <li className="navbar__links roundBtn">
                        <NavLink to="/cart" activeClassName="navbar__selected--cart">
                            <CartIcon />
                        </NavLink>
                    </li>   
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;