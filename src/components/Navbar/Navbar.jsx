import "./Navbar.css";
import L3Harris from "../../L3Harris";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -300 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${navbar ? "navbar navbar-fixed" : "navbar"}`}>
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
          {/* <li>
            <a href="#">
              <span>05. </span>Résumé
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
