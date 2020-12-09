import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartIcon = () => {
    const { itemsInCart } = useContext(CartContext);

    return (
        <>
            <span className="cart__counter">
                <p>{itemsInCart}</p>
            </span>
            <NavLink to="/cart" activeClassName="navbar__selected--cart">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.419"
                    height="20.522"
                    viewBox="0 0 21.419 20.522"
                >
                    <g id="cart_icon" transform="translate(0.85 0.85)">
                        <g id="cart_icon-2" data-name="cart_icon">
                            <path
                                id="Trazado_968"
                                data-name="Trazado 968"
                                d="M13.793,30.9a.9.9,0,1,1-.9-.9A.9.9,0,0,1,13.793,30.9Z"
                                transform="translate(-5.726 -12.97)"
                                fill="none"
                                stroke="#6e81a0"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.7"
                            />
                            <path
                                id="Trazado_969"
                                data-name="Trazado 969"
                                d="M30.293,30.9a.9.9,0,1,1-.9-.9A.9.9,0,0,1,30.293,30.9Z"
                                transform="translate(-12.366 -12.97)"
                                fill="none"
                                stroke="#6e81a0"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.7"
                            />
                            <path
                                id="Trazado_970"
                                data-name="Trazado 970"
                                d="M1.5,1.5H5.085l2.4,12A1.793,1.793,0,0,0,9.28,14.945h8.712A1.793,1.793,0,0,0,19.785,13.5l1.434-7.52H5.982"
                                transform="translate(-1.5 -1.5)"
                                fill="none"
                                stroke="#828eb4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.7"
                            />
                        </g>
                    </g>
                </svg>
            </NavLink>
        </>
    );
};

export default CartIcon;
