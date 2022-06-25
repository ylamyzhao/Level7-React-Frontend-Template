import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h2>In {props.state.split('"').join('')}, there are {props.degreeEarnedByMen.split('"').join('')} STEM degrees earned by men and {props.degreeEarnedByWomen.split('"').join('')} STEM degrees earned by women.</h2>
        </article>
    );
}

export default SearchResult;