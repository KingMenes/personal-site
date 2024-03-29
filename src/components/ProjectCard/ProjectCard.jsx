import { NavLink } from "react-router-dom";
import "./ProjectCard.css";
function ProjectCard({ project }) {
  const listTech = project.techUsed.map((tech) => (
    <div key={tech.id} className="techspan">
      {tech.icon}
      {tech.name}
    </div>
  ));

  return (
    <Navlink to={project.link}>
      <div class="project-card card">
        <div class={`wrapper ${project.name}`}>
          {/* <div class="date">
            <span class="day">12</span>
            <span class="month">Aug</span>
            <span class="year">2016</span>
          </div> */}
          <div class="data">
            <div class="content">
              {/* <span class="type">Project</span> */}
              <h1 class="title">
                <a href="#">{project.title}</a>
              </h1>
              <p class="text">{project.desc}</p>
              <div className="techdiv">{listTech}</div>
            </div>
          </div>
        </div>
        </div>
    </Navlink>
  );
}

export default ProjectCard;
