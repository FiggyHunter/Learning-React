import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const page = (
  <div>
    <h1>Element 1</h1>
    <h1>Element 2</h1>
    <h1>Element 3</h1>
  </div>
);

document.getElementById("root").append(page);
