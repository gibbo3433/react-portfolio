// These imports allow my app to use React and React-bootstrap to build and style my portfolio

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './background.css';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
