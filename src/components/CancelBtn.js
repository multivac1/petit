import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CancelBtn = () => {

    const { cleanAll } = useContext(CartContext);

    return (
        <div className="container__cancelBtn">
            <button className="cancelBtn" onClick={cleanAll}>Cancelar Compra</button>
        </div>
    );
}

export default CancelBtn;