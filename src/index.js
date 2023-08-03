// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
    <Navbar />
  </Router>
);


reportWebVitals();