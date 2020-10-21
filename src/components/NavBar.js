import React, { Component } from 'react';

class NavBar extends Component {

    render () {

        return (
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__links">
                        <a href="#">
                            <img src="./assets/images/home_icon.svg" alt="Ir a Inicio" />
                        </a>
                    </li>
                    <li className="navbar__links">
                        <a href="#">
                            <img src="./assets/images/category_icon.svg" alt="Más categorías" />
                        </a>
                    </li> 
                    <li className="navbar__links">
                        <a href="#">
                            <img src="./assets/images/cart_icon.svg" alt="Carrito de Compras" />
                        </a>
                    </li>  
                </ul>
            </nav>
        );

    }
}

export default NavBar;