import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function AddToCart(props) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="container__buyBtn">
            <button
                type="button"
                className="buyBtn"
                onClick={() => addToCart(props.item, props.quantity)}
            >
                Agregar al carrito
            </button>
        </div>
    );
}

export default AddToCart;
