import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetDBFirebase } from '../tools/firebaseFactory';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = GetDBFirebase();

        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);

        item.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('El item no existe');
                    return;
                }
                console.log('item encontrado');
                setItem({ id: doc.id, ...doc.data() });
            })
            .catch((error) => {
                console.log('error al buscar item', error);
            })
            .finally(() => {});
    }, [id]);

    return (
        <section className="page__container">
            <div className="detail__container">
                <ItemDetail item={item} />
            </div>
        </section>
    );
};

export default ItemDetailContainer;
