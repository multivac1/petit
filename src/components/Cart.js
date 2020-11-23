import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import CloseButton from '../assets/images/close_icon.svg';

const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
        <section className="page__container">
            <div className="detail__header">
                <Link to="/" className="roundBtn roundBtn--small">
                    <img src={CloseButton} alt="Cerrar" />
                </Link>
            </div>    
            <div className="cart__endBuy">
                {cart.length === 0 ? (
                <h1>Tu carrito está vacío</h1>
                ) : (
                <h1>Finaliza tu Compra</h1>
                )}
            </div>

            {cart.map((prod) => {
            const itemImage = require(`../assets/images/${prod.img}`)
                return <>
                    <div className="cart__container">   
                        <article key={prod.id} className="cart__article">
                            <div className="cart__content">
                                <div className="cart__view">
                                    <img src={itemImage} alt={prod.alt} />
                                </div>
                                <div className="cart__box">
                                    <h2 className="cart__title">{prod.name}</h2>
                                    <h3 className="cart__price">$ {prod.price}</h3>
                                </div>
                            </div>
                        </article>      
                        <ItemCount />
                        <h3 className="cart__total">Total: $</h3>
                        <div className="container__buyBtn">
                            <button className="buyBtn">Comprar</button>
                        </div>
                    </div>
                </>
            })}
        </section>
    );
}

export default Cart;