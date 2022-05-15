import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.MRData}>
            <h1>{props.name}</h1>
            <h3>Nationality {props.nationality}</h3>
            <a href={props.url} rel="noopener noreferrer" target="_blank">{props.url}</a>
        </article>
    );
}

export default SearchResult;