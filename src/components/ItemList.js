import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Spinner from './Spinner';
import Item from './Item';

const ItemList = () => {

    const { loading } = useContext(CartContext);

    return(
        <section className="items__container">
            { loading && <Spinner /> }
            { !loading && <Item /> }
        </section>
    );
}

export default ItemList;