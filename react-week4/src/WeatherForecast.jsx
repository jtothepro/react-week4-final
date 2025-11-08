import { useState, useEffect } from "react";
import "./WeatherForecast.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay.jsx";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
    const apiKey = "85be9c7bad2eb4fafc3fe0e35t2o0c3e";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.city]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast-container">
        <div className="row mb-2">
          <div className="col">
            <strong>5-day Weather Forecast</strong>
          </div>
        </div>

        <div className="row text-center">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
