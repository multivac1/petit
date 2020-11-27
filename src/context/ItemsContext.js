import React, { createContext, useState, useEffect } from 'react';
import { GetDBFirebase } from '../tools/firebaseFactory';

export const ItemsContext = createContext();

const ItemsContextProvider = ({children}) => {

    const [getItems, setGetItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = GetDBFirebase(); 
        const itemCollection = db.collection("items");
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('Sin resultados');
            }
            setGetItems(querySnapshot.docs.map(doc => doc.data()));
        }).catch(error) => {
            console.log("Error buscando items", error);
        }).finally(() => {
            setLoading(false);
        });
    }), [];

    return (
        <ItemsContext.Provider value={{
            getItems,
            setGetItems
            }}
        >
        </ItemsContext.Provider>
    );
}

export default ItemsContextProvider;

