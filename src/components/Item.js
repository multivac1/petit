import React, { useEffect, useState } from 'react';
import { GetDBFirebase, GetAll } from '../tools/firebaseFactory';
import AddItemCount from '../assets/images/itemCount__add.svg';
import { Link } from 'react-router-dom';

const Item = () => {

    const [DBContext] = useState(GetDBFirebase());
    const [productos, setProductos] = useState([]);
    //const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        GetAll("items").then((ret) => {
            setProductos(ret);
        });
        return () => {
        };
    }, []);

    return (
        productos.map((prod) => {
            return <article key={prod.categoryId} className="item__content">
                <div className="item__view">
                    <img src={prod.image} alt="" />
                </div>
                <div className="item__box">
                    <h2 className="item__title">{prod.title}</h2>
                    <div className="item__price">
                        <div className="roundBtn roundBtn--small">
                            <Link to={`/Item/${prod.categoryId}`}>
                                <img src={AddItemCount} alt="Detalle" />
                            </Link>
                        </div>
                        <h3>$ {prod.price}</h3>
                    </div>
                </div>
            </article>
        })
    )
}

export default Item;