import './ProjectCard.css'
function ProjectCard({ title, desc, name, techUsed }) {
  
  const listTech = techUsed.map(tech =>
    <span key={key}
      className='techspan'>
      {tech} 
    </span>
    );

  return (
    <div class="project-card card">
      <div class={`wrapper ${name}`}>
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
            <div className='techdiv'>
              {listTech}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard