import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
// import LandingPage from "./pages/LandingPage";
// import IncomePage from "./pages/IncomePage";
// import ExpensePage from "./pages/ExpensePage";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
