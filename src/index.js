import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { HomePage } from "./components/pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PlumbersPage } from "./components/pages/plumbersPage";
import { LeadPage } from "./components/pages/leadPage";

import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/lead" element={<LeadPage />} />
        <Route path="/plumbers" element={<PlumbersPage />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
