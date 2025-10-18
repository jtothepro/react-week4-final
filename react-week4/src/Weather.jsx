import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Weather.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <p>Hello from Weather</p>
        <h1>Berlin</h1>
        <ul>
          <li>Saturday, 07:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg "
              alt="weather icon"
            />
            6°C
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
}
