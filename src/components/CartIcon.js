import React from 'react';
import cartIcon from '../assets/images/cart_icon.svg';

const CartIcon = ({itemCount}) => {
    console.log(itemCount);
 
    return (
        <>
            <span className="cart__counter">
                <p>              
                   {itemCount}
                </p>
            </span>
            <img src={cartIcon} alt="Carrito" />
        </>
    );

}

export default CartIcon;