import React from "react";
import FormatDate from "./FormatDate";
import "./ForecastInfo.css";
import {convertTempToFarenheit, adjustTime} from "./helpers";


export default function ForecastInfo(props) {

    let date = adjustTime(props.data.dt, props.timezone);
    let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    let description = props.data.weather[0].description;
    let mimTemp = props.unit === 'F' ? convertTempToFarenheit(props.data.main.temp_min) : Math.round(props.data.main.temp_min);
    let maxTemp = props.unit === 'F' ? convertTempToFarenheit(props.data.main.temp_max) : Math.round(props.data.main.temp_max);
    
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
                    {mimTemp}°/{maxTemp}°
                </div>
            </div>
        </div>

    );
}