import './AboutMe.css'
import portrait from '../../assets/portrait2.jpg'

function AboutMe() {
  return (
    <div className="aboutMe" id='about'>
      <div className='about-text'>
        <h1 className='heading'><span>01. </span> About Me <hr /></h1>
        <p>Hello! My name is Mena and I enjoy making things and showing them off to the world. Originally I graduated RIT with a mechanical engineering degree, because I love to solve problems and work on products hands-on. 
        </p>
        <p>
          Fast forward to today, and I've had the 
        </p>
      </div>
      <div className='about-picture'>
        <img src={portrait} alt="" />
      </div>
      
      
    </div>
  )
}

export default AboutMe