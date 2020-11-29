import React, { useEffect, useState } from 'react';
import { GetDBFirebase, GetAll } from '../tools/firebaseFactory';
import { NavLink } from 'react-router-dom';

const ItemsCategories = () => {

    const [DBContext] = useState(GetDBFirebase());
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        GetAll("categories").then((ret) => {
            setCategories(ret);
        });
        return () => {
        };
    }, []);

    return(
        <div>
            <h1>Categorías</h1>
            {categories.map((cat) => {
                return <>
                    <ul className="category__container">
                        <li className="category__title">
                            <NavLink to={`categoria/${cat.name}`}>
                                <h2>{cat.name}</h2>
                            </NavLink>
                        </li>
                    </ul>
                </>
            })}
        </div>
    );
}

export default ItemsCategories;