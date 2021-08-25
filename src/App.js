import React, {useState} from 'react';
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import SearchOutput from "./components/SearchOutput/SearchOutput";
import Footer from "./components/Footer/Footer";
import {properties} from './properties';
import classes from './App.module.css';

function App() {
    const [inputLat, setInputLat] = useState('');
    const [inputLon, setInputLon] = useState('');
    const [inputDim, setInputDim] = useState('');
    const [inputDate, setInputDate] = useState('');

    const [output, setOutput] = useState(null);

    const searchHandler = (lat, lon, dim, date) => {
        setInputLat(lat);
        setInputLon(lon);
        setInputDim(dim);
        setInputDate(date);
        setOutput([]);

        fetch(properties.endpoint + "?date=" + date + "&dim=" + dim + "&lat=" + lat + "&lon=" + lon, {
            headers: {
                'Content-Type': 'image/png'
            },
            method: 'GET',
            mode: 'cors'
        })
            .then(response => {
                if (!response.ok) {
                    setInputLat(null);
                    setInputLon(null);
                    setInputDim(null);
                    setInputDate(null);
                    throw new Error("Not 2xx response")
                } else {
                    return response.blob();
                }
            })
            .then(blob=>{
                setOutput(URL.createObjectURL(blob));
                // Do whatever with the img
            })

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
                <SearchOutput term={inputLat} results={output}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
