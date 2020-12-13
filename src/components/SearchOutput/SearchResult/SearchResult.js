import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>{props.title}</h1>
            <p>{props.overview}</p>
           <h4>Released: {props.releaseDate}</h4>
        </article>
    );
}

export default SearchResult;