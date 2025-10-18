import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";
import Footer from "./Footer.jsx";
import Weather from "./Weather.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Weather App</h1>
    <Weather />
    <App />
    <Footer />
  </StrictMode>
);
