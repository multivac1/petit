import React, { useState } from 'react';
import AddItemCount from '../assets/images/itemCount__add.svg';
import RestItemCount from '../assets/images/itemCount__rest.svg';

function  ItemCount() {

   const [ itemCount, setItemCount ] = useState(0);

   const increase = () => {
        if (itemCount === 10) {
            setItemCount(10)
            return;
        }
        setItemCount (itemCount + 1)
    }

    const decrease = () => {
        if (itemCount === 0) {
            setItemCount(0)
            return;
        }
        setItemCount (itemCount - 1)
    }

    return(
        <div className="itemCount__container">
            <ul className="itemCount__list">
                <li className="roundBtn">
                    <span className="itemCount__rest" onClick={decrease}><img src={RestItemCount} alt="Agregar" /></span>
                </li>
                <li className="itemCount__quantity">
                    <span>{itemCount}</span>
                </li>
                <li className="roundBtn">
                    <span className="itemCount__add" onClick={increase}><img src={AddItemCount} alt="Agregar" /></span>
                </li>
            </ul>
        </div>
    );

}

export default ItemCount;