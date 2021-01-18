import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather city="Laguna" />

        <footer>
          <a href="https://github.com/molendaluisa/react-app" target="_blank">Open-source code</a> by Luisa Molenda
      </footer>
      </div>
    </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
