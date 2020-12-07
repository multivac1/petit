import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    
    const [ cart, setCart ] = useState([]);

    const addProduct = (selectedItem) => {
        const product = (item) => item.id === selectedItem.id;
        const productIndex = cart.findIndex(product)
        if (productIndex === -1 ) {
            setCart([...cart, selectedItem]);
            console.log(cart);
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
