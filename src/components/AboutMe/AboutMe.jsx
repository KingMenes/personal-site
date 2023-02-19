import "./AboutMe.css";
import HeaderIllustration from "../HeaderIllustration/HeaderIllustration";
import { themes } from "../../theme.js";

function AboutMe() {
  return (
    <div className="aboutMe" id="about">
      <div className="about-text">
        <h1 className="heading">
          <span>01. </span> About Me <hr />
        </h1>
        <p>
          Hello! My name is Mena and I enjoy making things and showing them off
          to the world. Originally I graduated RIT with a mechanical engineering
          degree, because I love to solve problems and work on products
          hands-on.
        </p>
        <p>Fast forward to today, and I've had the</p>
      </div>
      <div className="page-art">
        <HeaderIllustration theme={themes.dark} />
      </div>
    </div>
  );
}

export default AboutMe;
