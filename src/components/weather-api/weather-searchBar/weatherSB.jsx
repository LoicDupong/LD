const { useState } = require("react")

const WeatherSB = function(props) {
    // Props
    const { onSearchW } = props
    // State
    const [cityN, setCityN] = useState("")

    return(
        <div className="weather-container">
            <h1>City Weather API</h1>
            <input type="text" id="weatherSB" value={cityN} onChange={e =>setCityN(e.target.value)} placeholder="Insérez une ville"/>
            <button onClick={() => onSearchW(cityN)}>Search</button>
        </div>
    );
}

export default WeatherSB