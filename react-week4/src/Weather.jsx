import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate.jsx";

import "./Weather.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    //setTemperature(response.data.temperature.current);
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      name: response.data.city,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <button
                  type="Submit"
                  value="search"
                  className="btn btn-primary w-100"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          <h1>{weatherData.name}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "85be9c7bad2eb4fafc3fe0e35t2o0c3e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...  ";
  }
}
