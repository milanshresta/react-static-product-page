import { useState } from "react";
import WeatherForm from "../../components/Weather/WeatherForm";
import { fetchWeather } from "../../services/weatherApi"
import './WeatherPage.css';


const WeatherPage = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async (cityName) => {
        setError("");
        setCity(cityName);
        const data = await fetchWeather(cityName);

        if (data) {
            setWeatherData(data);
        } else {
            setWeatherData(null);
            setError("Please enter a valid city name");
        }
    };

    return (
        <div className="weather-component">
            <div className="weather-module">
                <WeatherForm onSearch={handleSearch} />
                {error && <p className="error-message">{error}</p>}
                {weatherData && <p>Based on data:</p>}
                {weatherData && (
                    <div className="data-box">
                        <p>City: {city}</p>
                        <p>Temperature: {weatherData.main.temp}°C</p>
                        <p>Condition: {weatherData.weather[0].main}</p>
                        <p>Description: {weatherData.weather[0].description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};


// function WeatherPage() {
//     return(
//         <div className="weather-component">
//             <div className="weather-module">
//                 <WeatherForm />
//                 <WeatherResult />
//                 <CopyButton />
//             </div>

//         </div>
//     );
// }

export default WeatherPage;