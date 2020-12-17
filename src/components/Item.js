import React, { useEffect, useState } from 'react';
import { GetDBFirebase } from '../tools/firebaseFactory';
import AddItemCount from '../assets/images/itemCount__add.svg';
import { Link, useParams } from 'react-router-dom';

const Item = () => {

    const [DBContext] = useState(GetDBFirebase());
    const [prods, setProds] = useState([]);
    const { key = "undefined" } = useParams();

   useEffect(() => {

    const itemCollection = DBContext.collection("items")

    if (key === "undefined") {
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("no resultados pa")
            }
            setProds(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }).catch((error) => {
            console.log("Error buscando prods", error)
        }).finally(() => {
            console.log("listo")
        })
    } else {
        const itemCategory = itemCollection.where("category", "==", key)
        itemCategory.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("no resultados pa")
            }
            setProds(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }).catch((error) => {
            console.log("Error buscando prods", error)
        }).finally(() => {
            console.log("listo")
        })
    }

}, [key])

    return (
        prods.map((prod) => {
            return <article key={prod.id} className="item__content">
                <div className="item__view">
                    <img src={prod.image} alt="" />
                </div>
                <div className="item__box">
                    <h2 className="item__title">{prod.title}</h2>
                    <div className="item__price">
                        <div className="roundBtn roundBtn--small">
                            <Link to={`/Item/${prod.id}`}>
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