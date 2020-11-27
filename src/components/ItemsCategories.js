import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemsCategories = () => {

    return(
        <ul className="category__container">
            <h1>Categorías</h1>
            <li className="category__title">
                <NavLink to={`categoria/accesorios`}>
                    <h2>Accesorios</h2>
                </NavLink>
            </li>
            <li className="category__title">
                <NavLink to={`categoria/decoracion`}>
                    <h2>Decoracion</h2>
                </NavLink>
            </li>
            <li className="category__title">
                <NavLink to={`categoria/laboratorio`}>
                    <h2>Laboratorio</h2>
                </NavLink>
            </li>
            <li className="category__title">
                <NavLink to={`categoria/oficina`}>
                    <h2>Oficina</h2>
                </NavLink>
            </li>
            <li className="category__title">
                <NavLink to={`categoria/publicidad`}>
                    <h2>Publicidad</h2>
                </NavLink>
            </li>
            <li className="category__title">
                <NavLink to={`categoria/vidrio`}>
                    <h2>Vidrio</h2>
                </NavLink>
            </li>
        </ul>
    );
}

export default ItemsCategories;