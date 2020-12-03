import React, { useState } from 'react';
import { GetDBFirebase } from '../tools/firebaseFactory';

const NewProd = () => {
    const [DBContext] = useState(GetDBFirebase());

    const newOrderHardcoded = {
        client: {
            name: 'Pepito',
            phone: '123456',
            email: 'pepito@mail.com',
        },
        items: [
            { id: 'B5jUYos7jw80TsgBsSi8' },
            { id: 'X9RZuIEsJtetqGnzUKhE' },
            { id: 'lKKIzN13ka9m9wgMIA0e' },
        ],
    };

    const newOrder = {
        ...newOrderHardcoded,
        total: newOrderHardcoded.items.length,
    };

    const postNewOrder = () => {
        const orders = DBContext.collection('orders');
        orders
            .add(newOrder)
            .then(({ id }) => {
                console.log(`se creo nueva orden`);
                updateStock(newOrder);
            })
            .catch((error) => console.log(error))
            .finally(() => {});
    };

    const updateStock = (newOrder) => {
        for (let i = 0; i < newOrder.items.length; i++) {
            const item = DBContext.collection('items').doc(newOrder.items[i].id);

            item
                .get()
                .then((doc) => {
                    if (!doc.exists) {
                        console.log('producto inexistente');
                    }
                    const prod = doc.data();

                    item.update({stock: prod.stock -1})
                })
                .catch((error) => console.log(error))
                .finally(() => {});
        }
    };

    return (
        <div>
            <p>{newOrder.client.name}</p>
            <p>{newOrder.client.phone}</p>
            <p>{newOrder.client.email}</p>
            <p>{newOrder.total}</p>
            <button conClick={postNewOrder()}>Generar Orden</button>
        </div>
    );
};

export default NewProd;
