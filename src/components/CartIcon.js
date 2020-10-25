import React, { Component } from 'react';
import cartIcon from '../assets/images/cart_icon.svg';

class CartIcon extends Component {

    render(){
  
        return (
            <img src={cartIcon} alt="Carrito" />
        );
    }
}

export default CartIcon;