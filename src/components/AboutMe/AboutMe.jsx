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
          &nbsp; &nbsp;&nbsp; &nbsp;Hello there! My name is Mena, and I'm a
          mechanical engineer with experience in product design, development,
          and optimization. I've worked for companies such as L3Harris
          Technologies, GE Aviation, and 21st Century Group, where I've gained
          valuable skills in 3D printing, assembly, soldering, and software such
          as Autodesk Inventor, Solidworks, ANSYS, Matlab, Node.js, Python,
          JAVA, LaTeX, VBS, and Microsoft Office.
          <br />
          <br />
          &nbsp; &nbsp;&nbsp; &nbsp; Throughout my career, I've worked on a
          variety of projects, from designing and building test fixtures to
          automating switch testing using Arduino and Java. I take great pride
          in my ability to approach problems from different angles and find
          creative solutions that optimize manufacturing methods and reduce
          overall costs. One of my proudest achievements was leading the winning
          design for the DarkWing Flat Panel VSAT articulation through
          consolidation of parts, which resulted in a successful bid for a $2.1
          million contract.
          <br />
          <br />
          &nbsp; &nbsp;&nbsp; &nbsp; Overall, I'm a curious and driven
          individual who is always eager to learn and grow. I'm excited to bring
          my skills and experience to new challenges and to help drive
          innovation and success for your company. Thank you for visiting my
          personal website, and I look forward to connecting with you soon!
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
