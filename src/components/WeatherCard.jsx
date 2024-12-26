
const WeatherCard = ({ weather }) => {
    const { name, main, weather: details } = weather;

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <p>{details[0].description}</p>
            <p>Temperature: {main.temp}°C</p>
            <p>Humidity: {main.humidity}%</p>
        </div>
    );
};

export default WeatherCard;
