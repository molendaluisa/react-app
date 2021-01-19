import React, { useState } from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";
import "./Forecast.css";


export default function Forecast(props) {
  const [forecastData, setforecastData] = useState(null);
  const [loaded, setLoaded] = useState (false);
  const numbers =  [7, 15, 23, 31, 39]

  function handleResponse(response) {
    setforecastData(response.data);
    setLoaded(true);
    }

  if (loaded && props.city === forecastData.city.name) {
    return (
      <div className="Forecast row">
        <ForecastInfo data={forecastData.list[7]} timezone={forecastData.city.timezone} />
        <ForecastInfo data={forecastData.list[15]} timezone={forecastData.city.timezone} />
        <ForecastInfo data={forecastData.list[23]} timezone={forecastData.city.timezone} />
        <ForecastInfo data={forecastData.list[31]} timezone={forecastData.city.timezone} />
        <ForecastInfo data={forecastData.list[39]} timezone={forecastData.city.timezone} />
      </div>
    );
  } else {

    const API_KEY = "d2c6c2007a695c29ac92861c649fdb75";
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${API_KEY}&units=metric`;
    axios.get(API_URL).then(handleResponse);

    return null;
  }
}