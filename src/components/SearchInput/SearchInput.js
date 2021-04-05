import React, {useState} from "react";
import classes from './SearchInput.module.css';

const SearchInput = props => {
    const [searchTerm, setSearchTerm] = useState('');
    const [endpoint, setEndpoint] = useState('Arriving');

    const searchInputHandler = event => {
        setSearchTerm(event.target.value);
    }

    const endpointInputHandler = event => {
        setEndpoint(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        if (searchTerm) {
            props.submitHandler(searchTerm, endpoint);
        }
    }

    return (
        <section className={classes.Search}>
            <div>
                <form onSubmit={submitHandler} className={classes.SearchInput}>
                    <input autoFocus name="query" type="text" value={searchTerm} onChange={searchInputHandler}
                           placeholder='  Enter search term'/>
                    <button type="submit">Search</button>
                    <div className={classes.RadioWrapper}>
                        <label>
                            <div className={classes.Radio}>
                                <input
                                    type="radio"
                                    value="Arriving"
                                    checked={endpoint === 'Arriving'}
                                    onChange={endpointInputHandler}
                                />
                            </div>
                            <div className={classes.RadioText}>
                                Arriving
                            </div>
                        </label>
                        <label>
                            <div className={classes.Radio}>
                                <input
                                    type="radio"
                                    value="Departing"
                                    checked={endpoint === 'Departing'}
                                    onChange={endpointInputHandler}
                                />
                            </div>
                            <div className={classes.RadioText}>
                                Departing
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SearchInput;
