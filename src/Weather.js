import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Laguna",
    date: "Fri, Dec 30th",
    time: "12:34",
    currentTemp: 19,
    currentUnit: "°C",
    highTemp: 20,
    lowTemp: 9,
    wind: 10,
    windUnit: "m/s",
    humidity: 20,
    humidityUnit: "%",
    sunrise: "06:34",
    sunset: "18:34"
  };

  return (
    <div className="Weather">
      <div className="wrapper">
        <div className="row align-items-center">
          <div className="col-sm-4 col-12 mt-1">
            <ul>
              <li>
                {weatherData.date} {weatherData.time}
              </li>
              <li>{weatherData.city}</li>
            </ul>
          </div>
          <div className="col-sm-2 col-12 mt-1">
            <div className="d-grid gap-2 d-md-block">
              <button className="btn-unit-selector btn-light btn-sm">°C</button>
              |
              <button className="btn-unit-selector btn-light btn-sm">°F</button>
            </div>
          </div>
          <div className="col-sm-5 col-9 mt-1">
            <form>
              <input
                type="text"
                placeholder="Enter a city"
                className="input-city"
              />
              <button type="submit" class="btn btn-light btn-sm btn-search">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div class="col-sm-1 col-3 p-0 mt-1">
            <button type="submit" className="btn btn-light btn-sm">
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
        <div className="current-info">
          <div className="row">
            <div className="col-sm current-left-side mb-3">
              <div className="col-md-auto current-icon">
                <i className="fas fa-cloud-showers-heavy"></i>
              </div>
              <div className="col-md-auto current-temp">
                {weatherData.currentTemp}
              </div>
              <div className="col-md-auto current-unit temp-unit">
                {weatherData.currentUnit}
              </div>
            </div>
            <div className="col-sm current-details">
              <div className="row">
                <div className="col-4">
                  <span className="high-temp">{weatherData.highTemp}</span>
                  <span className="temp-unit">{weatherData.currentUnit}</span>
                </div>
                <div className="col-4">
                  <span className="wind">{weatherData.wind}</span>
                  <span className="wind-unit">{weatherData.windUnit}</span>
                </div>
                <div className="col-4">
                  <span className="sunrise">{weatherData.sunrise}</span>
                </div>
                <div className="col-4 current-label">High</div>
                <div className="col-4 current-label">Wind</div>
                <div className="col-4 current-label">Sunrise</div>
                <div className="col-4">
                  <span className="low-temp">{weatherData.lowTemp}</span>
                  <span className="temp-unit">{weatherData.currentUnit}</span>
                </div>
                <div className="col-4">
                  <span className="humidity">{weatherData.humidity}</span>
                  <span className="unit">{weatherData.humidityUnit}</span>
                </div>
                <div className="col-4">
                  <span className="sunset">{weatherData.sunset}</span>
                </div>
                <div className="col-4 current-label">Low</div>
                <div className="col-4 current-label">Humidity</div>
                <div className="col-4 current-label">Sunset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
