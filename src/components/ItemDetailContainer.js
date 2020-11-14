import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import jsonData from '../data.json';
import Spinner from './Spinner';


const getPromise = (data) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      return resolved(data)
    }, 3000)
  })
}

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [item, setGetItems] = useState([]);

  const { id } = useParams();
  const searchItem = jsonData.filter(prod => prod.id == id)

  useEffect(() => {
      getPromise( searchItem ).then(result => {
        setGetItems(result);
        setLoading(false);
      });
  }, [])
  
  return ( 
      <section className="container__item__list">
        { loading && <Spinner/> }
        { !loading &&  <ItemDetail item={item}/> }
      </section>
  );
}
 
export default ItemDetailContainer;