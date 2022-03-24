import { useEffect, useState } from "react";

const WResult = function(props) {
    // Props
    const { city } = props
    
    // State
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")
    const [wind, setWind] = useState("")

    const urlWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=__cityname__&lang=fr&appid=fa09065674123d022f72ef70cb251675&units=metric"

    useEffect(() => {
        fetch(urlWeatherAPI.replace("__cityname__", city))
            .then(Response => Response.json())
            .then(data => {
                const tempData = data.main.temp
                setTemp(tempData)
                
                const windData = data.wind.speed
                setWind(windData)

                const descData = data.weather[0].description
                setDesc(descData)
                
                console.log(data.weather[0].description)
                console.log(data)
            })
    }, [city])

    return(
        <div>
        <h3>La températue à {city} est de : {temp} °C</h3>
        <p>Description : {desc}</p>
        <p>Vitesse du vent : {wind}</p>
        </div>
    );
}

export default WResult