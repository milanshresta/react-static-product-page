import { useState } from 'react';

const WeatherForm = ({ onSearch }) => {
    const [input, setInput] = useState("");
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && input.trim()) {
        onSearch(input);
      }
    };

    return (
        <div className="weather-form">
            <label>Enter your city name</label>
            <input
                type="text"
                placeholder="City name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default WeatherForm;


// function WeatherForm() {
//     return (
//         <div className="weather-form">
//             <label>Enter your city name</label>
//             <input type="text" placeholder="City name" />
//         </div>
//     );
// }

// export default WeatherForm;