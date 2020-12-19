import React, { Fragment }  from 'react';
import HomeIcon from './HomeIcon';
import CartIcon from './CartIcon';

const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__links roundBtn">
                        <HomeIcon />
                    </li>
                    <li className="navbar__links roundBtn">
                        <CartIcon />
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default NavBar;
