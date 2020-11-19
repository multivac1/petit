import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import cartIcon from '../assets/images/cart_icon.svg';

const CartIcon = () => {
    
    const spanCount = useContext(CartContext);
    const {cart} = spanCount;

    return (
        <>
            <span className="cart__counter">
                <p>              
                   {cart.length}
                </p>
            </span>
            <img src={cartIcon} alt="Carrito" />
        </>
    );

}

export default CartIcon;