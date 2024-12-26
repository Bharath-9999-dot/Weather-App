import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import axios from 'axios'
import './App.css';

const App = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        const API_KEY = 'db0e74cd9973896a9e111d8fdc76cf2d';
        const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(BASE_URL);
            console.log(response)
            setWeather(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <h1>Weather Report</h1>
            <SearchBar onSearch={fetchWeather} />
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default App;