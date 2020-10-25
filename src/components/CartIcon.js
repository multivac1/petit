import React, { Component } from 'react';
import homeIcon from '../assets/images/home_icon.svg';
import categoryIcon from '../assets/images/category_icon.svg';
import cartIcon from '../assets/images/cart_icon.svg';

class CartIcon extends Component {

    render(){
  
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
                            <img src={cartIcon} alt="Ir a Inicio" />
                        </a>
                    </li>   
                </ul>
            </nav>
        );
    }
}

export default CartIcon;