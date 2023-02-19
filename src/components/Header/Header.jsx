import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import "./Header.css";
import { TypeAnimation } from "react-type-animation";
import portrait from "../../assets/portrait2.jpg";

function Header() {
  return (
    <div className="header">
      <div className="blurb">
        <span className="greeting">Hello 👋</span>
        <p>
          My name is <span className="name">Mena Ibrahim.</span>
          <br />I am
          <TypeAnimation
            sequence={[
              "a Builder 👷‍♂️.",
              2000,
              "an Engineer 🛠️.",
              2000,
              "a Developer 💻.",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            deletionSpeed={99}
            className="type-animation"
          />
          <br />
          Always learning.
        </p>
        <div className="buttons">
          <button className="btn">Contact Me</button>
          <button className="btn resume-btn">View Resume</button>
        </div>
      </div>
      <div className="about-picture">
        <img src={portrait} alt="" />
      </div>
    </div>
  );
}

export default Header;
