import React, { useEffect, useState } from 'react';
import { GetDBFirebase } from '../tools/firebaseFactory';
import AddItemCount from '../assets/images/itemCount__add.svg';
import { Link, useParams } from 'react-router-dom';

const Item = () => {

    const [DBContext] = useState(GetDBFirebase());
    const [items, setItems] = useState([]);
    const { key = "undefined" } = useParams();

    useEffect(() => {

    const itemCollection = DBContext.collection("items");

    if (key === "undefined") {
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("Sin resultados");
            }
            setItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }).catch((error) => {
            console.log("Error buscando items", error);
        }).finally(() => {
            console.log("ok");
        })
    } else {
        const itemCategory = itemCollection.where("category", "==", key)
        itemCategory.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("Sin resultados")
            }
            setItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }).catch((error) => {
            console.log("Error buscando items", error)
        }).finally(() => {           
            console.log("ok")
        })
    }

}, [key])

    return ( 
        items.map((item) => {
            return <article key={item.id} className="item__content">
                <div className="item__view">
                    <img src={item.image} alt="" />
                </div>
                <div className="item__box">
                    <h2 className="item__title">{item.title}</h2>
                    <div className="item__price">
                        <div className="roundBtn roundBtn--small">
                            <Link to={`/Item/${item.id}`}>
                                <img src={AddItemCount} alt="Detalle" />
                            </Link>
                        </div>
                        <h3>$ {item.price}</h3>
                    </div>
                </div>
            </article>
        })
    )
}

export default Item;