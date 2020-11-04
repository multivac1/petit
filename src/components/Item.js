import React, { useState, useEffect } from 'react';
import AddItemCount from '../assets/images/itemCount__add.svg';

const netDelay = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data)
        }, 2000)
    })
}

const Item = ({jsonData}) => {

    const [Items, SetItems] = useState([]);

    useEffect(() => {
        const ItemData = netDelay(jsonData);
        ItemData.then(dataResult => SetItems(dataResult));
    }, [jsonData])

    return (
        Items.map((prod, id) => {
        const imagen = require(`../assets/images/${prod.img}`)

            return <article key={id} className="product__content">
                        <div className="product__view">
                            <img src={imagen} alt={prod.alt} />
                        </div>
                        <div className="product__box">
                            <h2 className="product__title">{prod.name}</h2>
                            <div className="product__price">
                                <div className="roundBtn roundBtn--small">
                                    <span className="itemCount__add">
                                        <img src={AddItemCount} alt="Agregar" />
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