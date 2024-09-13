import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleResponse(response) {
        return (
            `The weather in ${response.data.name} is ${response.data.main.temp}degrees C.`
        );
    }
    let apiKey = "667d9f573c8af4c33457be5d561a9148";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>Life is going Pretty good!</h2>
    );
}