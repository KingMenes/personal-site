import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";

export default function Main({ theme, setTheme }) {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
          <Route
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  theme={theme}
                  setTheme={setTheme}
                />
              )}
            />
          </Routes>
        </Router>
      </div>
    );
} 