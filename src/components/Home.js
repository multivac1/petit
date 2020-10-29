import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const Home = (props) => {

    return(
        <div className="home__container">
            <h1 className="home__greeting ml-5">
                {props.greeting}
            </h1>          
            <ItemCount />  
        </div>
    );

}

export default Home;
