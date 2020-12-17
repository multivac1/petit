import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeIcon = () => {
    
    return (
        <NavLink to="/" activeClassName="navbar__selected--home">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.334"
                height="16.59"
                viewBox="0 0 21.334 16.59"
            >
                <path
                    id="home_icon"
                    d="M10.383,6.557,3.555,12.181v6.07a.593.593,0,0,0,.593.593l4.15-.011a.593.593,0,0,0,.59-.593V14.7A.593.593,0,0,1,9.48,14.1h2.37a.593.593,0,0,1,.593.593v3.542a.593.593,0,0,0,.593.594l4.149.011a.593.593,0,0,0,.593-.593V12.177L10.95,6.557A.451.451,0,0,0,10.383,6.557ZM21.169,10.38l-3.1-2.552V2.7a.444.444,0,0,0-.444-.444H15.555a.444.444,0,0,0-.444.444V5.387L11.794,2.659a1.778,1.778,0,0,0-2.259,0L.16,10.38a.444.444,0,0,0-.059.626l.944,1.148a.444.444,0,0,0,.626.06l8.712-7.175a.451.451,0,0,1,.567,0l8.712,7.175a.444.444,0,0,0,.626-.059l.944-1.148a.444.444,0,0,0-.063-.627Z"
                    transform="translate(0.001 -2.254)"
                    fill="#828eb4"
                />
            </svg>
        </NavLink>
    );
};

export default HomeIcon;
