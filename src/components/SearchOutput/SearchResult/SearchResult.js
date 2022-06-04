import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>state: {props.state}</h1>
            <h3>degreeEarnedByMen: {props.degreeEarnedByMen}</h3>
            <h5>degreeEarnedByWomen: {props.degreeEarnedByWomen}</h5>

        </article>
    );
}

export default SearchResult;