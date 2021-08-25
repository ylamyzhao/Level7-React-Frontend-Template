import React, {useState} from "react";
import classes from './SearchInput.module.css';

const SearchInput = props => {
    const [searchLat, setSearchLat] = useState('29.78');
    const [searchLon, setSearchLon] = useState('-95.5');
    const [searchDim, setSearchDim] = useState('1');
    const [searchDate, setSearchDate] = useState('2018-01-02');


    const submitHandler = event => {
        event.preventDefault();
        if (searchLat !== '' && searchLon !== '' && searchDim !== '' && searchDate !== '') {
            props.submitHandler(searchLat, searchLon , searchDim, searchDate);
        }
    }

    return (
        <section className={classes.Search}>
            <div>
                <form onSubmit={submitHandler} className={classes.SearchInput}>
                    <input autoFocus name="query" type="text" value={searchLat} onChange={e => setSearchLat(e.target.value)} placeholder='  Enter latitude'/>
                    <input autoFocus name="query" type="text" value={searchLon} onChange={e => setSearchLon(e.target.value)} placeholder='  Enter longitude'/>
                    <input autoFocus name="query" type="text" value={searchDim} onChange={e => setSearchDim(e.target.value)} placeholder='  Enter dimension (in degrees)'/>
                    <input autoFocus name="query" type="text" value={searchDate} onChange={e => setSearchDate(e.target.value)} placeholder='  Enter date (yyyy-mm-dd)'/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </section>
    );
}

export default SearchInput;
