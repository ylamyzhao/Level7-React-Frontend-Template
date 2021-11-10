import React from "react";
import classes from './SearchResult.module.css';
//Had to add @CrossOrigin to QuoteController class on backend
const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Title: {props.title}</h1>
            <h3>Publisher: {props.publisher}</h3>
            <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
        </article>
    );
}

export default SearchResult;