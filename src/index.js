import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSquareCheck,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faSquareCheck, faListCheck);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
