import React from 'react';
import HomeIcon from './HomeIcon';
import CategoryIcon from './CategoryIcon';
import CartIcon from './CartIcon';

const NavBar = () => {
    
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__links roundBtn">
                        <HomeIcon />
                    </li>
                    <li className="navbar__links roundBtn">
                        <CategoryIcon />
                    </li>
                    <li className="navbar__links roundBtn">
                        <CartIcon />
                    </li>   
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;