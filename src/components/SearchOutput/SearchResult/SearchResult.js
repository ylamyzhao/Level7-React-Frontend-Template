import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return <article className={classes.Result} style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: .15, paddingLeft: '0em'}}>
            <img src={props.photoUrl} alt="Food" style={{width: '100%', height: 'auto'}}/>
        </div>
        <article className={classes.Result}>
            <h1>Name: {props.name}</h1>
            <h3>Primary Breed: {props.primaryBreed}</h3>
            <h3>Type {props.type}</h3>
            <a href={props.url} rel="noopener noreferrer" target="_blank">{props.url}</a>
            <a href={props.photoUrl} rel="noopener noreferrer" target="_blank">{props.photoUrl}</a>
            <h3>Age: {props.age}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Description: {props.description}</h3>

        </article>
        }

        export default SearchResult;
