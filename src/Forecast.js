import React, { useState } from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";
import "./Forecast.css";


export default function Forecast(props) {
  const [forecastData, setforecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setforecastData(response.data);
    setLoaded(true);
  }


  if (loaded && props.city === forecastData.city.name) {

    let items = [];
    for (let i = 0; i < 40; i = i + 8) {
      items.push(<ForecastInfo key={i} data={forecastData.list[i]} timezone={forecastData.city.timezone} unit={props.unit} />);
    }
    return (
      <div className="Forecast row">
        {items}
      </div>
    );
  } else {
    const API_KEY = "d2c6c2007a695c29ac92861c649fdb75";
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${API_KEY}&units=metric`;
    axios.get(API_URL).then(handleResponse);
    return null;
  }
}