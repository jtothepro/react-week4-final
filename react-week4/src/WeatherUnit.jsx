import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celcius");

  function ConvertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ConvertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherUnit">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C I{" "}
          <a href="/" onClick={ConvertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherUnit">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={ConvertToCelcius}>
            °C
          </a>{" "}
          I °F
        </span>
      </div>
    );
  }
}
