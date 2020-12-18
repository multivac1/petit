import React, { useState, useEffect } from 'react';
import AddItemCount from '../assets/images/itemCount__add.svg';
import RestItemCount from '../assets/images/itemCount__rest.svg';

const ItemCount = (props) => {
    
    const [itemCount, setItemCount] = useState(1);
    const setQuantity = props.quantity;

    const increase = () => {
        if (itemCount < props.max) {
            setItemCount(itemCount + 1);
        }
    };

    const decrease = () => {
        if (itemCount === 1) {
            setItemCount(1);
            return;
        }
        setItemCount(itemCount - 1);
    };

    useEffect(() => {
        setQuantity(itemCount);
    }, [itemCount]);

    return (
        <div className="itemCount__container">
            <ul className="itemCount__list">
                <li className="roundBtn">
                    <span
                        className="itemCount__rest"
                        onClick={() => decrease()}
                    >
                        <img src={RestItemCount} alt="Agregar" />
                    </span>
                </li>
                <li className="itemCount__quantity">
                    <span>
                        <p>{itemCount}</p>
                    </span>
                </li>
                <li className="roundBtn">
                    <span className="itemCount__add" onClick={() => increase()}>
                        <img src={AddItemCount} alt="Agregar" />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default ItemCount;
