import React from 'react';
import AddItemCount from '../assets/images/itemCount__add.svg';
import { Link } from 'react-router-dom';

const Item = ({getItems}) => {

    return (
        getItems.map((prod, key) => {
        const itemImage = require(`../assets/images/${prod.img}`)

            return <article key={key} className="product__content">
                <div className="product__view">
                    <img src={itemImage} alt={prod.alt} />
                </div>
                <div className="product__box">
                    <h2 className="product__title">{prod.name}</h2>
                    <div className="product__price">
                        <div className="roundBtn roundBtn--small">
                            <span className="itemCount__add">
                                <Link to={`/Item/${prod.id}`}>
                                    <img src={AddItemCount} alt="Detalle" />
                                </Link>
                            </span>
                        </div>
                        <h3>$ {prod.price}</h3>
                    </div>
                </div>
            </article>
        })
    )
}

export default Item;