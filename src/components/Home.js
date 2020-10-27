import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {

    return(
        <div className="home__container">
            <h1 className="home__greeting ml-5">
                {props.greeting}
            </h1>            
        </div>
    );

}

export default Home;
