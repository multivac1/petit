import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    
    const [ cart, addToCart ] = useState([]);

    const addProduct = (selectedProduct) => {
        const product = (prod) => prod.id === selectedProduct.id;
        const productIndex = cart.findIndex(product)
        if (productIndex === -1 ) {
            addToCart([...cart, selectedProduct])
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            addProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
