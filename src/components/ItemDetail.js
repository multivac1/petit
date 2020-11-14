import React from 'react';

const ItemDetail = ({item}) => {
    return (
        item.map((prod, key) => {
        const itemImage = require(`../assets/images/${prod.img}`)

            return <article key={key} className="product__content">
            <div className="product__view">
                <img src={itemImage} alt={prod.alt} />
            </div>
            <div className="product__box">
                <h2 className="product__title">{prod.name}</h2>
                <div className="product__price">
                    <h3>$ {prod.price}</h3>
                </div>
            </div>
            </article>
        })
    );
}

export default ItemDetail;