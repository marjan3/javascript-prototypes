import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TrackingExplorer from "./components/TrackingExplorer";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<TrackingExplorer />, document.getElementById("root"));
registerServiceWorker();
