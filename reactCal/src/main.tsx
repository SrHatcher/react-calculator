import { BrowserRouter } from "react-router-dom";
import "./global/global.css";
import { Router } from "./router/Router";
import React from "react";
import ReactDOM from "react-dom/client";
import "./global/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
