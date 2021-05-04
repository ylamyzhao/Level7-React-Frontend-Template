import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return <article className={classes.Result} style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: .15, paddingLeft: '0em'}}>
            <img src={props.image} alt="Food" style={{width:'100%', height: 'auto'}}/>
        </div>
        <div style={{flex: .85, paddingLeft: '1em'}}>
            <h1 style={{marginBottom: 0}}>{props.title}</h1>
            <a href={props.sourceUrl} rel="noopener noreferrer" target="_blank">{props.sourceUrl}</a>
            <h3 className={classes.Author}>
                {props.ingredients && props.ingredients.map((ingredient, index) => <span key={index}>{ingredient}, </span>)}
            </h3>
        </div>
    </article>
}

export default SearchResult;
