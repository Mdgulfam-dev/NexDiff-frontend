import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

import { HelmetProvider } from "react-helmet-async";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
      <Analytics />
    </HelmetProvider>
  </BrowserRouter>,
);
