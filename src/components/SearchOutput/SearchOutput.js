import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

    if (props.term && props.results.length !== 0) {
        message = null;
    } else if (props.term) {
        message = <Spinner/>;
    } else if (props.term === null){
        message = "no results found";
    }

    let searchResults = null;
    if (props.results && props.results.length !== 0) {
        searchResults =
            <div style={{borderWidth: 5, borderColor: 'black'}}>
            <img src={props.results} alt="Satellite Image" style={{width:'50%', height: 'auto'}}/>
            </div>
    }

    return (
        <div className={classes.Result}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;
