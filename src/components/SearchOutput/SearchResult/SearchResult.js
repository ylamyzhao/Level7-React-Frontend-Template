import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>state: {props.state}</h1>
        </article>
    );
}

export default SearchResult;