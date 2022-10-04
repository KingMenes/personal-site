import './App.css';
import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { themes } from "../theme";
import { GlobalStyles } from "../global"; 
import Main from '../pages/Main';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
            <Main theme={themes[theme]} setTheme={setTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
