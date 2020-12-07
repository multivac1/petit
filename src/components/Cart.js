import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import CloseButton from '../assets/images/close_icon.svg';
import BuyBtn from './BuyBtn';
import NewProd from './NewProd';

const Cart = (props) => {

    const { cart } = useContext(CartContext);

    return (

        <section className="cart__container">
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
            {cart.map((item) => {

                return (
                        <div className="cart__item">   
                            <article key={item.id} className="cart__article">
                                <div className="cart__content">
                                    <div className="cart__view">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="cart__box">
                                        <h2 className="cart__title">{item.title}</h2>
                                        <h3 className="cart__price">$ {item.price}</h3>
                                    </div>
                                </div>
                            </article>      
                            <ItemCount />
                        </div>
                )
           
            })} 

                <h3 className="cart__total">Total: $</h3>
                <BuyBtn />
            
        </section>
    );
}

export default Cart;