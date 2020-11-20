import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import jsonData from '../data.json';
import Spinner from './Spinner';


const getPromise = (data) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      return resolved(data)
    }, 500)
  })
}

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [item, setGetItems] = useState([]);

  const { id } = useParams();
  const searchItem = jsonData.filter(prod => prod.id === id)

  useEffect(() => {
      getPromise( searchItem ).then(result => {
        setGetItems(result);
        setLoading(false);
      });
  }, [])
  
  return ( 
      <section className="page__container">
        <div className="detail__container">
          { loading && <Spinner/> }
          { !loading &&  <ItemDetail item={item}/> }
        </div>
      </section>
  );
}
 
export default ItemDetailContainer;