import { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}`;
  }

  function forecastDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{forecastDay()}</div>{" "}
      <div className="Icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          width={48}
          height={48}
        />
      </div>
      <div className="WeatherForecastTemp">
        <span className="Max">{maxTemperature()}°</span>
        {""} <span className="Min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
