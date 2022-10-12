import 'normalize.css'
import './App.css';
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { themes } from "../theme";
import { GlobalStyles } from "../global"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";


function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <div className='App'>
        <GlobalStyles />
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
    </ThemeProvider>
  );
}

export default App;
