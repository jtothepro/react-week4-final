import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { useState } from "react";

import "./Weather.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setReady(true);
    setTemperature(response.data.main.temp);
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

          <h1>Berlin</h1>
          <ul>
            <li>Saturday, 07:00</li>
            <li>Sunny</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg "
                  alt="weather icon"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">6</span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 80%</li>
                <li>Humidity: 70%</li>
                <li>Wind: 10 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "85be9c7bad2eb4fafc3fe0e35t2o0c3e";
    let city = "Berlin";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    return "Loading...  ";
  }
}
