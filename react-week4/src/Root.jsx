import Weather from "./Weather.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Root.css";

export default function Root() {
  return (
    <div className="Root">
      <Weather defaultCity="Berlin" />
      <Footer />
    </div>
  );
}
