import React from 'react';
import ItemList from './ItemList';
import CategoryName from './CategoryName';
import logoPetit from '../assets/images/logo_petit.svg';
import SearchItems from './SearchItems';

const Home = () => {
    
    return (
        <div className="page__container">
            <div className="home__content">
                <img src={logoPetit} alt="Logotipo Petit" />
                <SearchItems />
            </div>
            <h1 className="home__title">
                Impresiones <strong>3D</strong>
                <br />
                Grabado <strong>láser</strong>
            </h1>
            <CategoryName />
            <ItemList />
        </div>
    );
};

export default Home;
