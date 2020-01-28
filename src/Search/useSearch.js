import React,{useEffect, useState} from "react";
import axios from 'axios';


const useSearch = () => {
    const [searchWord, setSearchWord] = useState("");
    const [results, setResults] = useState([]);

    const changedWordCharacter = (event) => {
        setSearchWord(event.target.value)
    };

    useEffect(() => {
        axios.post("https://geo.homeq.se/api/v1/public/suggest",{
            query: searchWord
        }).then((response) => {
            const searchResult = (response.data.results.map(resultOption => {
                return resultOption.text
            }));
            setResults(searchResult)
        });



    }, [
        searchWord
    ]);

    return {
        searchWord,
        results,
        changedWordCharacter,
    }


};

export default useSearch;

