import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import LogoPetit from '../assets/images/logo_petit.svg';
import CloseButton from '../assets/images/close_icon.svg';

const ItemDetail = ({item}) => {
    return (
        
        item.map((prod, key) => {
        const itemImage = require(`../assets/images/${prod.img}`)

            return <>
                <div className="detail__header">
                    <Link to="/" className="roundBtn roundBtn--small">
                        <img src={CloseButton} alt="Cerrar" />
                    </Link>
                </div>           
                <article key={key} className="detail__article">
                    <div className="detail__content">
                        <div className="detail__view">
                            <img src={itemImage} alt={prod.alt} />
                        </div>
                    </div>
                    <div className="detail__box">
                        <h2 className="detail__title">{prod.name}</h2>
                        <p>{prod.description}</p>
                        <div className="detail__price">
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