import './AboutMe.css'
import portrait from '../../assets/portrait.jpg'

function AboutMe() {
  return (
    <div className="aboutMe" id='about'>
      <div className='about-text'>
        <h1 className='heading'><span>01. </span> About Me <hr /></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos esse id debitis, nisi, culpa odit ut libero sed, molestiae quis accusamus ab similique laborum expedita inventore. Facere, laudantium dolor!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ea at eaque velit iusto ipsam illum quis perferendis eveniet quam rerum, accusamus odit reiciendis aperiam aliquid voluptatem fugiat provident vitae.
        </p>
      </div>
      <div className='about-picture'>
        <img src={portrait} alt="" />
      </div>
      
      
    </div>
  )
}

export default AboutMe