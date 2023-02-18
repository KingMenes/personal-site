import "./SocialMediaBar.css";
import { BsGithub, BsInstagram, BsGoogle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
function SocialMediaBar() {
  return (
    <div className="socialMedia">
      <ul>
        <li>
          <a href="https://github.com/KingMenes" className="github">
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mibrahim777/"
            className="linkedin"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mibrahim777/"
            className="instagram"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="mailto:menaibr96@gmail.com" className="google">
            <BsGoogle />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaBar;
