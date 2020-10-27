import React from 'react';
import homeIcon from '../assets/images/home_icon.svg';
import categoryIcon from '../assets/images/category_icon.svg';
import CartIcon from './CartIcon';

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__links">
                    <a href="#">
                        <img src={homeIcon} alt="Inicio" />
                    </a>
                </li>
                <li className="navbar__links">
                    <a href="#">
                        <img src={categoryIcon} alt="Categorias" />
                    </a>
                </li>
                <li className="navbar__links">
                    <a href="#">
                        <CartIcon />
                    </a>
                </li>   
            </ul>
        </nav>
    );
    
}

export default NavBar;