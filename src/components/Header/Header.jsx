import React from "react";
import HeaderIllustration from "../HeaderIllustration/HeaderIllustration";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import "./Header.css";
import { themes } from "../../theme.js";
import { TypeAnimation } from "react-type-animation";

function Header() {
  return (
    <div className="header">
      <div className="blurb">
        <span className="greeting">Hello 👋.</span>
        <p>
          My name is <span className="name">Mena Ibrahim.</span>
          <br />I am a
          <TypeAnimation
            sequence={["Builder", 2000, "Engineer", 2000, "Developer", 2000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            deletionSpeed={99}
            className="type-animation"
          />
          <br />
          Always learning.
        </p>
        <button className="contact-btn">Contact Me</button>
      </div>
      <div className="page-art">
        <HeaderIllustration theme={themes.dark} />
      </div>
    </div>
  );
}

export default Header;
