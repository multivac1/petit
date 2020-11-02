import React, { useState, useEffect } from 'react';

const getPromise = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(data)
        }, 2000)
    })
}

const Item = ({dataJson}) => {

    const [sourceData, SetSourceData] = useState([]);

    useEffect(() => {
        const info = getPromise(dataJson);
        info.then(result => SetSourceData(result));
    }, [dataJson])

    return (
        sourceData.map((prod, i) => {
        const imagen = require(`../assets/images/${prod.img}`)

            return <article key={i}>
                <div>
                    <img src={imagen} alt="" />
                </div>
                <div>
                    <h2>{prod.name}</h2>
                </div>
                <div>
                    <p>$ {prod.price}</p>
                </div>
            </article>
        })
    )
}

export default Item;