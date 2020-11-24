import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

function AddToCart(props) {
    const cartContext = useContext(CartContext); 
    const {addProd} = cartContext;

    return (
        <div className="container__buyBtn">
            <button type="button" className="buyBtn"
            onClick={() => addProd(props.prod, props.quantity)}>
                Agregar al carro
            </button>
        </div>
    )
}

export default AddToCart;
