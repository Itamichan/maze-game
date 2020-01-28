import React from 'react';
import useSearch from './useSearch'

const Search = () => {

    const {searchWord, results, changedWordCharacter} = useSearch();

    const showResults = results.map((result, idx) => {
        return <div>{result}</div>
    });

    return (
        <div>
            <input type="text" onChange={changedWordCharacter} value={searchWord}/>
            <div>Your results: {showResults}</div>
        </div>


    )
};

export default Search;