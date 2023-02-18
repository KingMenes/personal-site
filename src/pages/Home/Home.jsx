import "./Home.css";
import Header from "../../components/Header/Header";
import AboutMe from "../../components/AboutMe/AboutMe";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";

function Home({ theme, setTheme }) {
  return (
    <div className="Home">
      <Header theme={theme} setTheme={setTheme} />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default Home;
