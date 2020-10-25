import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

    render() {

        return(
            <div className="home__container">
                <h1 className="home__greeting ml-5">
                  {this.props.greeting}
                </h1>
                
            </div>
        );
    }

}

export default Home;
