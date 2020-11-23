import React, { createContext, useState } from 'react';
import jsonData from '../data.json';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

    const [ cart, addToCart ] = useState([]);
    const [ itemCount, setItemCount ] = useState(1);

    /* Counter */
    const increase = () => {
         if (itemCount === 10) {
             setItemCount(10)
             return;
         }
         setItemCount (itemCount + 1)
     }
 
     const decrease = () => {
         if (itemCount === 0) {
             setItemCount(1)
             return;
         }
         setItemCount (itemCount - 1)
     }

    /* Select */
    const selectProduct = (prodID) => {
        const product = jsonData.filter(p => p.id === prodID)[0];
        product.quantity = 1
        if(!cart.find(item => item.id === product.id)){
            addToCart([
                ...cart,
                product
            ]);
        }
    }

    const addMore = (prod) =>{
        addToCart(cart);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            increase,
            decrease,
            itemCount,
            selectProduct,
            addMore
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
