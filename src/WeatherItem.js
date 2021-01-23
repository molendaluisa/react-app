import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherItem(props) {


    return (
        <div className="col-4">
            <span>{props.isTime ?  <FormatDate date={props.value} type="time" /> : props.value}</span>
            <span className="unit">{props.unit}</span>
            <div>{props.label}</div>
        </div>
    );
}