import React, { useState, useEffect } from 'react';
import Item from './Item';
import jsonData from '../data.json';
import Spinner from './Spinner';

const getPromise = (data) => {
    return new Promise((resolved, rejected) => {
      setTimeout(() => {
        return resolved(data)
      }, 500)
    })
}

function ItemList() {

    const [loading, setLoading] = useState(true);
    const [getItems, setGetItems] = useState([]);

    useEffect(() => {
        getPromise( jsonData ).then(result => {
            setGetItems(result);
            setLoading(false)
        });
    }, [])

    return(
        <section className="items__container">
            { loading && <Spinner/> }
            { !loading &&  <Item getItems={getItems}/> }
        </section>
    );
}

export default ItemList;