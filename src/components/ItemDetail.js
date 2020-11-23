import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import CloseButton from '../assets/images/close_icon.svg';

const ItemDetail = ({item}) => {

    const cartContext = useContext(CartContext); 

    const { cart, selectProduct, addMore } = cartContext;

    return (
        
        item.map((prod) => {
        const itemImage = require(`../assets/images/${prod.img}`)

            return <>
                <div className="detail__header">
                    <Link to="/" className="roundBtn roundBtn--small">
                        <img src={CloseButton} alt="Cerrar" />
                    </Link>
                </div>           
                <article key={prod.id} className="detail__article">
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
                <div className="container__buyBtn">
                    <button className="buyBtn" onClick={() => {cart.find(item => item.id === prod.id) ? addMore(prod) : selectProduct(prod.id)}}>Agregar al Carrito</button>
                </div>
            </>
        })
    );
}

export default ItemDetail;