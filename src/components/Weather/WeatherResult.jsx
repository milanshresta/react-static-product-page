const WeatherResult = ({ data }) => {
    const temp = data.main?.temp;
    const condition = data.weather?.[0]?.main;
    const description = data.weather?.[0]?.description;

    return (
        <div className="weather-result">
            <p>Based on data:</p>
            <div className="data-box">
                <p>Temperature: {temp}°C</p>
                <p>Condition: {condition}</p>
                <p>Description: {description}</p>
            </div>
        </div>
    );
};

export default WeatherResult;