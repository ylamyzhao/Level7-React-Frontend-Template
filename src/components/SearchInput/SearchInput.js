import React, {useState} from "react";
import classes from './SearchInput.module.css';

const SearchInput = props => {
    const [searchTerm, setSearchTerm] = useState('');
    const [endpoint, setEndpoint] = useState('Keyword   ');

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
                                    value="Keyword"
                                    checked={endpoint === 'Keyword'}
                                    defaultChecked
                                    onChange={endpointInputHandler}
                                />
                            </div>
                            <div className={classes.RadioText}>
                                Keyword
                            </div>
                        </label>
                        <label>
                            <div className={classes.Radio}>
                                <input
                                    type="radio"
                                    value="Title"
                                    checked={endpoint === 'Title'}
                                    onChange={endpointInputHandler}
                                />
                            </div>
                            <div className={classes.RadioText}>
                                Title
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SearchInput;