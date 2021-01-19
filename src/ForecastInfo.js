import React, { useState } from "react";
import FormatDate from "./FormatDate";
import "./ForecastInfo.css";

export default function ForecastInfo(props) {

    let date = new Date((props.data.dt + props.timezone) * 1000);
    let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    let description = props.data.weather[0].description;
    let temp_min = Math.round(props.data.main.temp_min);
    let temp_max = Math.round(props.data.main.temp_max);

    return (
        <div className="ForecastInfo">
            <div className="col forecast-info">
                <div className="forecast-day">
                    <FormatDate date={date} type="weekday" />
                </div>
                <div className="forecast-icon">
                    <img src={icon} alt={description} />
                </div>
                <div className="forecast-temp">
                    {temp_min}°/{temp_max}°
                </div>
            </div>
        </div>

    );
}