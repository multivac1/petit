import React, { useState, useEffect } from 'react';
import AddItemCount from '../assets/images/itemCount__add.svg';
import { Route, Link, Switch } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';

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
                                        <Link to={`/ItemDetailContainer/${id}`}>
                                            <img src={AddItemCount} alt="Detalle" />
                                        </Link>
                                    </span>
                                </div>
                                <h3>$ {prod.price}</h3>
                            </div>
                        </div>
                        <Switch>
               
                            <Route path="/ItemDetailContainer/:id" component={ItemDetailContainer} />
               
                        </Switch>
                    </article>
        })
    )
}

export default Item;