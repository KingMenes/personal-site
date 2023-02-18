// import 'normalize.css'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import SocialMediaSidebar from "../components/SocialMediaSidebar/SocialMediaSidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SocialMediaSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
