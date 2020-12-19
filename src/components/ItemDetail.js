import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';
import ItemCount from './ItemCount';
import CloseButton from '../assets/images/close_icon.svg';

const ItemDetail = (props) => {
    const [itemQuantity, setItemQuantity] = useState(0);

    function setQuantity(itemCount) {
        setItemQuantity(itemCount);
    }

    return (
        <>
            <div className="detail__header">
                <Link to="/" className="roundBtn roundBtn--small">
                    <img src={CloseButton} alt="Cerrar" />
                </Link>
            </div>
            <article className="detail__article">
                <div className="detail__content">
                    <div className="item__view">
                        <img src={props.item.image} alt="" />
                    </div>
                </div>
                <div className="detail__box">
                    <h2 className="detail__title">{props.item.title}</h2>
                    <p>{props.item.desc}</p>
                    <p>Unidades disponibles: {props.item.stock}</p>
                    <div className="detail__price">
                        <h3>$ {props.item.price}</h3>
                    </div>
                </div>
            </article>
            <ItemCount quantity={setQuantity} max={props.item.stock} />
            <AddToCart
                item={props.item}
                price={props.item.price}
                quantity={itemQuantity}
            />
        </>
    );
};

export default ItemDetail;
