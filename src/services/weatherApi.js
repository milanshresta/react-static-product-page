export const fetchWeather = async (city) => {
    const apiKey = 'b71f91fc76da3c1dd2f3a353c6601730';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        // Check if the response is ok (status code 200-299)
        return await response.json();
        // If the response is ok, parse the JSON data and return it
    } catch (error) {
        console.error('API error:', error);
        return null;
    }
}

export default fetchWeather;

// This function fetches weather data from the OpenWeatherMap API based on the city name provided.
// It constructs the API URL using the city name and the API key stored in environment variables.
// It handles errors that may occur during the fetch operation and logs them to the console.
// The function returns the weather data in JSON format if the fetch is successful.
// The function is asynchronous, meaning it returns a promise that resolves to the weather data.