import React from "react";
import ReactDOM from "react-dom/client";
import App from "../home/App.jsx";
import LoginPage from "../loginpage/LoginPage.jsx";
import "../css/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "../signuppage/SignUpPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
