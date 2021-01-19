import React, { useState } from "react";
import FormatDate from "./FormatDate";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});
  const [city, setCity] = useState(props.city);
  const [unit, setUnit] = useState({ temp: "C", wind: "km/h" })


  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      name: response.data.name,
      date: new Date((response.data.dt + response.data.timezone) * 1000),
      temp: response.data.main.temp,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: new Date((response.data.sys.sunrise + response.data.timezone) * 1000),
      sunset: new Date((response.data.sys.sunset + response.data.timezone) * 1000)
    });
  }

  function apiCall() {
    const API_KEY = "d2c6c2007a695c29ac92861c649fdb75";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(API_URL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }
  function handleInput(event) {
    setCity(event.target.value);
  }

  function handleCelsius(event) {
    event.preventDefault();
    setUnit({ temp: "C", wind: "km/h" })
  }
  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit({ temp: "F", wind: "mph" })

  }

  if (weatherData.loaded) {

    return (
      <div className="Weather">
        <div className="wrapper">
          <div className="row align-items-center">
            <div className="col-sm-4 col-12 mt-1">
              <ul>
                <li>
                  <FormatDate date={weatherData.date} type="fulldate" />
                </li>
                <li>{weatherData.name}</li>
              </ul>
            </div>
            <div className="col-sm-2 col-12 mt-1">
              <div className="d-grid gap-2 d-md-block">
                <button className="btn-unit-selector btn-light btn-sm" onClick={handleCelsius}>°C</button>
              |
              <button className="btn-unit-selector btn-light btn-sm" onClick={handleFahrenheit}>°F</button>
              </div>
            </div>
            <div className="col-sm-5 col-9 mt-1">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a city"
                  className="input-city"
                  onChange={handleInput}
                />
                <button type="submit" className="btn btn-light btn-sm btn-search">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div className="col-sm-1 col-3 p-0 mt-1">
              <button type="submit" className="btn btn-light btn-sm">
                <i className="fas fa-location-arrow"></i>
              </button>
            </div>
          </div>
          <div className="current-info">
            <div className="row">
              <div className="col-sm current-left-side mb-3">
                <div className="col-md-auto current-icon">
                  <img src={weatherData.icon} alt={weatherData.description} />
                </div>
                <div className="col-md-auto current-temp">
                  {Math.round(weatherData.temp)}
                </div>
                <div className="col-md-auto current-unit temp-unit">
                  °{unit.temp}
                </div>
              </div>
              <div className="col-sm current-details">
                <div className="row">
                  <div className="col-4">
                    <span className="high-temp">{Math.round(weatherData.tempMax)}</span>
                    <span className="temp-unit unit">°{unit.temp}</span>
                  </div>
                  <div className="col-4">
                    <span className="wind">{Math.round(weatherData.wind)}</span>
                    <span className="wind-unit unit">{unit.wind}</span>
                  </div>
                  <div className="col-4">
                    <span className="sunrise"><FormatDate date={weatherData.sunrise} type="time" /></span>
                  </div>
                  <div className="col-4 current-label">High</div>
                  <div className="col-4 current-label">Wind</div>
                  <div className="col-4 current-label">Sunrise</div>
                  <div className="col-4">
                    <span className="low-temp">{Math.round(weatherData.tempMin)}</span>
                    <span className="temp-unit unit">°{unit.temp}</span>
                  </div>
                  <div className="col-4">
                    <span className="humidity">{weatherData.humidity}</span>
                    <span className="unit">%</span>
                  </div>
                  <div className="col-4">
                    <span className="sunset"><FormatDate date={weatherData.sunset} type="time" /></span>
                  </div>
                  <div className="col-4 current-label">Low</div>
                  <div className="col-4 current-label">Humidity</div>
                  <div className="col-4 current-label">Sunset</div>
                </div>
              </div>
            </div>
          </div>
          <Forecast city={weatherData.name} />
        </div>
      </div>
    );
  } else {
    apiCall();
    return "Loading...";
  }
}

