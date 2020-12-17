import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const FormCheckout = () => {
    
    const cartContext = useContext(CartContext);
    const {
        error,
        continueBtn,
        nameInput,
        phoneInput,
        mailInput,
        repeatedMailInput,
        changeInput,
        validateSubmit,
    } = cartContext;

    return (
        <Fragment>
            <h2 className="checkout__title">Formulario de Compra</h2>
            <div className="checkout__container">
                <form
                    className="checkout__form"
                    onSubmit={(e) => {
                        validateSubmit(e);
                    }}
                >
                    {error ? (
                        <p className="checkout__validate">
                            ¡Verifique los datos ingresados!
                        </p>
                    ) : null}
                    <div className="checkout__content">
                        <label>Nombre y Apellido</label>
                        <input
                            ref={nameInput}
                            className=""
                            type="text"
                            id="name"
                            placeholder="nombre y apellido"
                            name="name"
                            onInput={changeInput}
                        />
                    </div>
                    <div className="checkout__content">
                        <label>Celular</label>
                        <input
                            ref={phoneInput}
                            className=""
                            type="number"
                            id="phone"
                            placeholder="3416467889"
                            name="phone"
                            onInput={changeInput}
                        />
                    </div>
                    <div className="checkout__content">
                        <label htmlFor="exampleEmailInput">Email</label>
                        <input
                            ref={mailInput}
                            className=""
                            type="email"
                            placeholder="mail@mail.com"
                            id="exampleEmailInput"
                            name="mail"
                            onInput={changeInput}
                        />
                    </div>
                    <div className="checkout__content">
                        <label htmlFor="exampleEmailInput">
                            Repita su email
                        </label>
                        <input
                            ref={repeatedMailInput}
                            className=""
                            type="email"
                            placeholder="mail@mail.com"
                            id="exampleEmailInput"
                            name="repeatedMail"
                            onInput={changeInput}
                        />
                    </div>
                    {!continueBtn ? (
                    <div className="checkoutBtn__container">
                        <Link to="/order">
                            <button
                                className="checkoutBtn"
                                type="submit"
                                value="Continue"
                                >
                                Continuar
                            </button>
                        </Link>
                        </div>
                    ) : (
                        <div className="checkoutBtn__container">
                        <button
                        className="checkoutBtn"
                        type="submit"
                        value="Continue"
                        >
                            Continuar
                        </button>
                        </div>
                    )}
                </form>
            </div>
        </Fragment>
    );
};

export default FormCheckout;
