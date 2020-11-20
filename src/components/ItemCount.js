import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import AddItemCount from '../assets/images/itemCount__add.svg';
import RestItemCount from '../assets/images/itemCount__rest.svg';

const ItemCount = () => {

    const { decrease, increase, itemCount } = useContext( CartContext );

    return(
        <div className="itemCount__container">
            <ul className="itemCount__list">
                <li className="roundBtn">
                    <span className="itemCount__rest" onClick={ () => decrease() }><img src={ RestItemCount } alt="Agregar" /></span>
                </li>
                <li className="itemCount__quantity">
                    <span>
                        <p>{itemCount}</p>
                    </span>
                </li>
                <li className="roundBtn">
                    <span className="itemCount__add" onClick={ () => increase() }><img src={ AddItemCount } alt="Agregar" /></span>
                </li>
            </ul>
        </div>
    );
}

export default ItemCount;