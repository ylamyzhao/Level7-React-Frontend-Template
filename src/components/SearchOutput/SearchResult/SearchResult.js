import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props.term);
    let arrivalTime = props.arrival.scheduled || props.arrival.estimated || props.arrival.actual
    arrivalTime = arrivalTime.substring(arrivalTime.indexOf('T')+1, arrivalTime.indexOf('+'));
    return (
        <article className={classes.Result}>
            <p> <span style={{fontSize:'x-large', fontWeight:'bold'}}>{props.airline.name} flight {props.flight.number} ({props.flight.iata})</span> <br />
            <strong>Date:</strong> {props.flightDate} <br/>
                <strong>Flight Status:</strong> {props.flightStatus}</p>
            <p><strong>Departing:</strong> {props.departure.airport} ({props.departure.iata})</p>
            <p><strong>Arriving:</strong> {props.arrival.airport} ({props.arrival.iata}) <br/>
                <strong>Arrival Time:</strong> {arrivalTime} <br />
                <strong>Arrival Gate:</strong> Terminal {props.arrival.terminal} Gate {props.arrival.gate}
                </p>

        </article>
    );
}

export default SearchResult;
