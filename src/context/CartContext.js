import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    
    const [ cart, setCart ] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0)

    const addToCart = (selectedItem, quantity) => {
        const checkItem = (item) => item.id === selectedItem.id;
        const indexItem = cart.findIndex(checkItem)
        if (indexItem === -1 ) {
            setCart([...cart, selectedItem]);
            itemQuantity(selectedItem, quantity)
            itemTotalPrice(quantity)
        } else {
            cart[indexItem].quantity += quantity
            itemTotalPrice(quantity)
        }  
    }
    
    function itemQuantity(selectedItem, quantity) {
        selectedItem.quantity = quantity
    }

    function itemTotalPrice(quantity) {
        const itemCount = itemsInCart + quantity
        setItemsInCart(itemCount)
    }

    function totalPrice() {
        return cart.reduce((prev, next) => (prev + (next.quantity * next.price)),0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,  
            itemsInCart, 
            totalPrice,
            setCart,
            setItemsInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
