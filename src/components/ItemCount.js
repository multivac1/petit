import React, { useState } from 'react';

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
                    <span className="itemCount__rest" onClick={decrease}>-</span>
                </li>
                <li className="roundBtn">
                    <span className="itemCount__quantity">{itemCount}</span>
                </li>
                <li className="roundBtn">
                    <span className="itemCount__add" onClick={increase}>+</span>
                </li>
            </ul>
        </div>
    );

}

export default ItemCount;