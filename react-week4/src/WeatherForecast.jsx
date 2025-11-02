import { useState } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">5-day Weather Forecast</div>
      <div className="col">
        <div className="WeatherForecastDay">Thu</div>{" "}
        <div className="Icon">Icon</div>
        <div className="WeatherForecastTemp">
          <span className="Max">19°</span>
          {""} <span className="Min">10°</span>
        </div>
      </div>
    </div>
  );
}
