import React, { useEffect, useState } from 'react';
import { GetAll } from '../tools/firebaseFactory';
import { NavLink } from 'react-router-dom';
import ArrowIcon from '../assets/images/arrow_icon.svg';

const CategoryName = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        GetAll('categories').then((ret) => {
            setCategories(ret);
        });
        return () => {};
    }, []);

    return (
        <div className="category__hover">
            <h3>
                Categorías
                <img
                    src={ArrowIcon}
                    alt="Menú desplegable"
                    className="category__arrow"
                />
            </h3>
            {categories.map((cat) => (
                <div className="category__container">
                    <ul className="category__menu">
                        <li key={cat.key} className="category__title">
                            <NavLink
                                to={`/categories/${cat.key}`}
                                activeClassName="category__links"
                            >
                                <p>
                                    <img
                                        src={ArrowIcon}
                                        alt="Menú desplegable"
                                        className="category__arrow--subcategory"
                                    />
                                    {cat.description}
                                </p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CategoryName;
