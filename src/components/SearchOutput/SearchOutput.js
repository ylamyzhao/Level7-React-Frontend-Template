import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

    console.log("A");
    console.log(props);
    if (props.term && props.MRData.ConstructorTable.Constructors.length !== 0) {
        message = <p>Showing {props.MRData.ConstructorTable.Constructors.length} results</p>;
    } else if (props.term) {
        message = <Spinner/>;
    } else if (props.term === null){
        message = "no results found";
    }

    let searchResults = null;
    console.log("B");
    console.log(props);
    if (props.MRData) {
        searchResults =
            props.results.map((c, index) => {
                return (
                    <SearchResult
                        key={index}
                        name={c.name}
                        url={c.url}
                        nationality={c.nationality}
                    />
                );
            })
    }

    return (
        <div className={classes.MRData}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;