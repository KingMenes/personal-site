import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'
import {projects} from '../../projects'

function Projects() {
  return (
    <div className='projects' id='projects'>
      <h2 className='heading'><span>03. </span> Projects <hr /></h2>
      <div className='project-cards'>
        <div className='row'>
          <ProjectCard project={projects[0]}
          />
          <ProjectCard project={projects[1]}
          />
        </div>
        <div className='row'>
          {/* <ProjectCard/>
          <ProjectCard/> */}
        </div>
        
      </div>
    </div>
  )
}

export default Projects