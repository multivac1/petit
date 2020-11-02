import React from 'react';
import Item from './Item';
import dataJson from '../data.json';

function ItemList() {

    return(
        <section>
           
                <Item dataJson={dataJson} />
          
        </section>

    );
}

export default ItemList;