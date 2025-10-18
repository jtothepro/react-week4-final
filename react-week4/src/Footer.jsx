import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function Footer() {
  return (
    <div className="App">
      <div className="container">
        <footer>
          This was coded by Jenny P and is{" "}
          <a href="https://github.com/jtothepro" target="_blank">
            open sourced by GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
