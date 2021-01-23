import React, { useState } from "react";
import FormatDate from "./FormatDate";
import Forecast from "./Forecast";
import WeatherItem from "./WeatherItem";
import axios from "axios";
import "./Weather.css";
import { convertTempToFarenheit, convertWindToMPH, adjustTime } from "./helpers";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState(props.city);


  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      name: response.data.name,
      date: adjustTime(response.data.dt, response.data.timezone),
      temp: response.data.main.temp,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: adjustTime(response.data.sys.sunrise, response.data.timezone),
      sunset: adjustTime(response.data.sys.sunset, response.data.timezone)
    });

    setCurrentWeather({
      unit: "C",
      temp: Math.round(response.data.main.temp),
      windUnit: "km/h",
      wind: Math.round(response.data.wind.speed),
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max)
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

  function handleCelsius() {
    if (currentWeather.unit === "F") {
      setCurrentWeather({
        unit: "C",
        temp: Math.round(weatherData.temp),
        windUnit: "km/h",
        wind: Math.round(weatherData.wind),
        tempMin: Math.round(weatherData.tempMin),
        tempMax: Math.round(weatherData.tempMax)
      });
    }
  }

  function handleFahrenheit() {
    if (currentWeather.unit === "C") {
      setCurrentWeather({
        unit: "F",
        temp: convertTempToFarenheit(weatherData.temp),
        windUnit: "mph",
        wind: convertWindToMPH(weatherData.wind),
        tempMin: convertTempToFarenheit(weatherData.tempMin),
        tempMax: convertTempToFarenheit(weatherData.tempMax),
      });
    }
  }

  function handleLocation() {
    
    function getMyGeo(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const API_KEY = "d2c6c2007a695c29ac92861c649fdb75";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(getMyGeo);
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
              <button className="btn btn-light btn-sm" onClick={handleLocation}>
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
                  {currentWeather.temp}
                </div>
                <div className="col-md-auto current-unit temp-unit">
                  °{currentWeather.unit}
                </div>
              </div>
              <div className="col-sm current-details">
                <div className="row">
                  <WeatherItem value={currentWeather.tempMax} unit={"°" + currentWeather.unit} label="High" />
                  <WeatherItem value={currentWeather.wind} unit={currentWeather.windUnit} label="Wind" />
                  <WeatherItem value={weatherData.sunrise} label="Sunrise" isTime={true} />
                  <WeatherItem value={currentWeather.tempMin} unit={"°" + currentWeather.unit} label="Low" />
                  <WeatherItem value={weatherData.humidity} unit={"%"} label="Humidity" />
                  <WeatherItem value={weatherData.sunset} label="Sunset" isTime={true} />
                </div>
              </div>
            </div>
          </div>
          <Forecast city={weatherData.name} unit={currentWeather.unit} />
        </div>
      </div>
    );
  } else {
    handleLocation();
    return "Loading...";
  }
}

