import './ProjectCard.css'
function ProjectCard({title,desc}) {
  return (
    <div class="project-card card">
      <div class="wrapper">
        {/* <div class="date">
          <span class="day">12</span>
          <span class="month">Aug</span>
          <span class="year">2016</span>
        </div> */}
        <div class="data">
          <div class="content">
            {/* <span class="type">Project</span> */}
            <h1 class="title"><a href="#">{title}</a></h1>
            <p class="text">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard