import { useState } from "react";
import "./WeatherForecast.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "85be9c7bad2eb4fafc3fe0e35t2o0c3e";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
