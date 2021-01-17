import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />

      <footer>
      <a href="https://github.com/molendaluisa/react-app">Open-source code </a>by Luisa Molenda
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
