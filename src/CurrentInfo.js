import React from "react";
import FormatDate from "./FormatDate";

export default function CurrentInfo(props) {
  return (
    <div className="CurrentInfo">
      <div className="current-info">
        <div className="row">
          <div className="col-sm current-left-side mb-3">
            <div className="col-md-auto current-icon">
              <img src={props.data.icon} alt={props.data.description} />
            </div>
            <div className="col-md-auto current-temp">
              {Math.round(props.data.temp)}
            </div>
            <div className="col-md-auto current-unit temp-unit">
              °C
                </div>
          </div>
          <div className="col-sm current-details">
            <div className="row">
              <div className="col-4">
                <span className="high-temp">{Math.round(props.data.tempMax)}</span>
                <span className="temp-unit unit">°C</span>
              </div>
              <div className="col-4">
                <span className="wind">{Math.round(props.data.wind)}</span>
                <span className="wind-unit unit">km/h</span>
              </div>
              <div className="col-4">
                <span className="sunrise"><FormatDate date={props.data.sunrise} type="time" /></span>
              </div>
              <div className="col-4 current-label">High</div>
              <div className="col-4 current-label">Wind</div>
              <div className="col-4 current-label">Sunrise</div>
              <div className="col-4">
                <span className="low-temp">{Math.round(props.data.tempMin)}</span>
                <span className="temp-unit unit">°C</span>
              </div>
              <div className="col-4">
                <span className="humidity">{props.data.humidity}</span>
                <span className="unit">%</span>
              </div>
              <div className="col-4">
                <span className="sunset"><FormatDate date={props.data.sunset} type="time" /></span>
              </div>
              <div className="col-4 current-label">Low</div>
              <div className="col-4 current-label">Humidity</div>
              <div className="col-4 current-label">Sunset</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}