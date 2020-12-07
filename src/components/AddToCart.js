import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

function AddToCart(props) {
    const cartContext = useContext(CartContext); 
    const {addProduct} = cartContext;

    return (
        <div className="container__buyBtn">
            <button type="button" className="buyBtn"
            onClick={() => addProduct(props.item)}>Agregar al carrito</button>
        </div>
    )
}

export default AddToCart;
