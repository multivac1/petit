import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    
    const [ cart, addToCart ] = useState([]);
    const [ quantityCart, setQuantityCart ] = useState(0)

    const addProd = (newProduct, quantity) => {
        const product = (prod) => prod.id === newProduct.id;
        const prodIndex = cart.findIndex(product)
        if (prodIndex === -1 ) {
            const prodAdded = [...cart, newProduct]
            addToCart(prodAdded)
            addProdQuantity(newProduct, quantity)
            addTotalQuantity(quantity)
        } else {
            cart[prodIndex].quantity += quantity
            addTotalQuantity(quantity)
        }
    }

    function addProdQuantity(newProduct, quantity) {
        newProduct.quantity = quantity
    }

    function addTotalQuantity(quantity) {
        const itemCount = quantityCart + quantity
        setQuantityCart(itemCount)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            addProd,
            quantityCart,
            setQuantityCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
