import React, { useContext, Fragment } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Order = () => {
    const cartContext = useContext(CartContext);

    let { cart, orderSummary, sumItems, sumTotal, createOrder } = cartContext;

    const { name, phone, mail } = orderSummary;

    return (
        <Fragment>
            <h2 className="order__title">Orden de Compra</h2>
            <div className="order__container">
                <div className="order__data">
                    <div className="order__subtitle">
                        <h3>Datos del Comprador</h3>
                        <hr className="order__line" />
                    </div>
                    <p>
                        Nombre y Apellido: <em>{name}</em>
                    </p>
                    <p>
                        Email: <em>{mail}</em>
                    </p>
                    <p>
                        Celular: <em>{phone}</em>
                    </p>
                    <p>
                        Fecha de compra: <em>{new Date().toDateString()}</em>
                    </p>
                </div>
                <div className="order__subtitle">
                    <h3>Resumen de Compra</h3>
                    <hr className="order__line" />
                </div>
                <div className="order__resume">
                    <h4>Producto</h4>
                    <h4>Cantidad</h4>
                    <h4>Subtotal</h4>
                </div>
                {cart.map((item) => (
                    <div className="order__items" key={item.id}>
                        <p>
                            <em>{item.title}</em>
                        </p>                        
                        <p>
                            <em>{item.quantity}</em>
                        </p>
                        <p>
                            <em>{sumItems(item)}</em>
                        </p>
                    </div>
                ))}
                <div className="order__total">
                    <p>Total: {sumTotal(cart)}</p>
                </div>
                <div className="order__containerBtn"></div>
                <Link to="/">
                    <button className="orderBtn" onClick={() => createOrder()}>
                        Finalizar Orden
                    </button>
                </Link>
            </div>
        </Fragment>
    );
};

export default Order;
