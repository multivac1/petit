import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';

const Home = (props) => {

    return(
        <div className="home__container">
            <h1 className="home__greeting ml-5">
                {props.greeting}
            </h1> 

            <ItemList />

        </div>
    );

}

export default Home;
