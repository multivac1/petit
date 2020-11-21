import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [ itemCount, setItemCount ] = useState(0);

    const increase = () => {
         if (itemCount === 10) {
             setItemCount(10)
             return;
         }
         setItemCount (itemCount + 1)
     }
 
     const decrease = () => {
         if (itemCount === 0) {
             setItemCount(0)
             return;
         }
         setItemCount (itemCount - 1)
     }

    const [ cart, setCart ] = useState(itemCount);

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            increase,
            decrease,
            itemCount
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
