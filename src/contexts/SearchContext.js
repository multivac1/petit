import React, { createContext, useState } from 'react';

export const SearchContext = createContext([]);

const SearchContextProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('')

    const searchInput = (text) => {
        setSearchValue(text)
    }

    return (
        <SearchContext.Provider value= {{ searchValue, searchInput }} >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;