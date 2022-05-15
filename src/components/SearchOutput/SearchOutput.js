import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

    if (props.term && props.results.length !== 0) {
        message = <p>Showing {props.results.length} results</p>;
    } else if (props.term) {
        message = <Spinner/>;
    } else if (props.term === null){
        message = "no results found";
    }

    let searchResults = null;
    if (props.results) {
        searchResults =
            props.results.map((result, index) => {
                return (
                    <SearchResult
                        key={index}

                        location={result.location}
                        name={location.name}
                        region={location.region}
                        country={location.country}
                        lat={location.lat}
                        lon={location.lon}
                        tz_id={location.tz_id}
                        localtime_epoch={location.localtime_epoch}
                        localtime={location.localtime}

                        current={result.current}
                        temp_c={current.temp_c}
                        temp_f={current.temp_f}
                        condition={current.condition}
                        text={condition.text}
                        wind_mph={current.wind_mph}
                        wind_kph={current.wind_kph}
                        wind_degree={current.wind_degree}
                        wind_dir={current.wind_dir}
                        pressure_mb={current.pressure_mb}
                        pressure_in={current.pressure_in}
                        precip_mm={current.precip_mm}
                        precip_in={current.precip_in}
                        humidity={current.humidity};
                        cloud={current.cloud}
                        vis_km={current.vis_km}
                        vis_miles={current.vis_miles}
                        uv={current.uv}
                        gust_mph={current.gust_mph}
                        gust_kph={current.gust_kph}

                    />
                );
            })
    }

    return (
        <div className={classes.Result}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;