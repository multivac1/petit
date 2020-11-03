import React from 'react';
import Item from './Item';
import jsonData from '../data.json';

function ItemList() {

    return(
        <section className="product__container">
           
                <Item jsonData={jsonData} />
          
        </section>

    );
}

export default ItemList;