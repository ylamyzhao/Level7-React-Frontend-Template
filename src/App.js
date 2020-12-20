import React, {useState} from 'react';
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import SearchOutput from "./components/SearchOutput/SearchOutput";
import Footer from "./components/Footer/Footer";
import {properties} from './properties';
import classes from './App.module.css';

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const searchHandler = (query, endpoint) => {
        console.log("[App]:  Doing an AJAX call for query='" + query + "'.");
        setInput(query);
        setOutput([]);
        let requestUrl = properties.endpoint;

        if(endpoint === 'Keyword'){
            requestUrl += 'searchKeyword?q=';
        } else if(endpoint === 'Title') {
            requestUrl += 'searchTitle?q='  ;
        }

        fetch(requestUrl + query, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'cors'
        })
            .then(response => {
                if (!response.ok) {
                    const term = null;
                    setInput(term);
                    throw new Error("Not 2xx response")
                } else {
                    return response.json()
                }
            })
            .then(data => {
                    const results = [];
                    data.forEach(datum => {
                        results.push(datum)
                    });
                    setOutput(results);
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className={classes.App}>
            <header className={classes.AppHeader}>
                <div>
                    <Header/>
                </div>
            </header>
            <main>
                <SearchInput submitHandler={searchHandler}/>
                <SearchOutput term={input} results={output}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;