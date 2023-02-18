import "./Navbar.css";
import L3Harris from "../../L3Harris";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span>mena.ibrahim()</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">
              <span>01. </span>About Me
            </a>
          </li>
          <li>
            <a href="#experience">
              <span>02. </span>Experience
            </a>
          </li>
          <li>
            <a href="#projects">
              <span>03. </span>Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>04. </span>Contact Me
            </a>
          </li>
          <li>
            <a href="#">
              <span>05. </span>Résumé
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
