import React, { useContext, useEffect } from 'react';
import searchIcon from '../assets/images/search_icon.svg';
import { SearchContext } from '../contexts/SearchContext';

const SearchItems = () => {
    const { searchValue, searchInput } = useContext(SearchContext);

    useEffect(() => {}, [searchValue]);

    return (
        <div className="search__container">
            <img src={searchIcon} alt="Buscar" />
            <form className="search__form">
                <input
                    className="search"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                    onChange={(event) => searchInput(event.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchItems;
