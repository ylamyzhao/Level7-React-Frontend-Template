import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Location</h1>
            <h3>City: {props.name}, {props.region}, {props.country}</h3>
            <h3>tz_id: {props.tz_id}</h3>
            <h3>Coordinates: {props.lat} degrees latitude, {props.lon} degrees longitude</h3>
            <br>
            <h3>Localtime: {props.localtime}</h3>
            <h3>Localtime Epoch: {props.localtime_epoch}</h3>
            <br>
            <br>
            <h1>Weather Information</h1>
            <h3>Current Condition: {props.text}</h3>
            <br>
            <h3>Temperature: {props.temp_c} Celcius, {props.temp_f} Fahrenheit</h3>
            <h3>Humidity: {props.humidity}%</h3>
            <br>
            <h3>Cloud: {props.cloud}%</h3>
            <h3>Precipitation: {props.precip_mm} millimeters, {props.precip_in} inches</h3>
            <br>
            <h3>Wind Speed: {props.wind_kph} KPH, {props.wind_mph} MPH</h3>
            <h3>Wind Direction: {props.wind_dir}</h3>
            <h3>Wind Degree: {props.wind_degree} degrees</h3>
            <br>
            <h3>Gust Speed: {props.gust_kph} KPH, {props.gust_mph} MPH</h3>
            <br>
            <h3>Pressure: {props.pressure_mm} millibars, {props.pressure_in} inches</h3>
            <br>
            <h3>UV: {props.uv} on UV Index</h3>
            <br>
            <h3>Visibility: {props.vis_km} kilometers, {props.vis_miles} miles</h3>

            <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
        </article>
    );
}

export default SearchResult;