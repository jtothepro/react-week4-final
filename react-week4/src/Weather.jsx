import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

import "./Weather.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
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
      city: response.data.city,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "85be9c7bad2eb4fafc3fe0e35t2o0c3e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus
                  onChange={handleCityChange}
                  value={city}
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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...  ";
  }
}
