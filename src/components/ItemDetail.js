import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    return (
        
        item.map((prod, key) => {
        const itemImage = require(`../assets/images/${prod.img}`)

            return <>           
                <article key={key} className="item__content">
                    <div className="item__view">
                        <img src={itemImage} alt={prod.alt} />
                    </div>
                    <div className="item__box">
                        <h2 className="item__title">{prod.name}</h2>
                        <div className="item__price">
                            <h3>$ {prod.price}</h3>
                        </div>
                    </div>
                </article>
                <ItemCount />
            </>
        })
    );
}

export default ItemDetail;