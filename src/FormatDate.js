import React from "react";

export default function FormatDate(props) {

  function dateSuffix(d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  let hour = props.date.getUTCHours();
  hour = hour > 9 ? hour : `0${hour}`;

  let minute = props.date.getUTCMinutes();
  minute = minute > 9 ? minute : `0${minute}`;

  const WEEK_DAY_NAME = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekDay = WEEK_DAY_NAME[props.date.getUTCDay()];

  const MONTH_NAME = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let month = MONTH_NAME[props.date.getUTCMonth()];

  let date = props.date.getUTCDate();

  let suffix = dateSuffix(props.date.getUTCDate());


  if (props.type === "fulldate") {
    return (
      <div className="FormatDate">
        {hour}:{minute} {weekDay}, {month} {date}{suffix}
      </div>);
  }
  else if (props.type === "time") {
    return (
      <div className="FormatDate">
        {hour}:{minute}
      </div>
      );
  } else {
    return (
      <div className="FormatDate">
        {weekDay}
      </div>
      );
  }
}