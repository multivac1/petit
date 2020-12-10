import React, { useEffect, useState } from 'react';
import { GetDBFirebase, GetAll } from '../tools/firebaseFactory';
import { NavLink } from 'react-router-dom';

const CategoryName = () => {

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
            {categories.map((category) => {
                return <>
                    <ul className="category__container">
                        <li className="category__title">
                            <NavLink to={`categoria/${category.name}`}>
                                <h2>{category.name}</h2>
                            </NavLink>
                        </li>
                    </ul>
                </>
            })}
        </div>
    );
}

export default CategoryName;