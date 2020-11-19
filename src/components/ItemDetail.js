import React, { useContext, useState } from 'react';
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import CloseButton from '../assets/images/close_icon.svg';

const ItemDetail = ({item}) => {
    
    const setCount = useContext(CartContext);
    const {setCart} = setCount;

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

    return (
        
        item.map((prod, key) => {
        const itemImage = require(`../assets/images/${prod.img}`)

            return <>
                <div className="detail__header">
                    <Link to="/" className="roundBtn roundBtn--small">
                        <img src={CloseButton} alt="Cerrar" />
                    </Link>
                </div>           
                <article key={key} className="detail__article">
                    <div className="detail__content">
                        <div className="detail__view">
                            <img src={itemImage} alt={prod.alt} />
                        </div>
                    </div>
                    <div className="detail__box">
                        <h2 className="detail__title">{prod.name}</h2>
                        <p>{prod.description}</p>
                        <div className="detail__price">
                            <h3>$ {prod.price}</h3>
                        </div>
                    </div>
                </article>      
                <ItemCount 
                    decrease={decrease}
                    itemCount={itemCount}
                    increase={increase}
                />
                <div className="container__buyBtn">
                    <button className="buyBtn" onClick={setCart}>Agregat al Carrito</button>
                </div>
            </>
        })
    );
}

export default ItemDetail;