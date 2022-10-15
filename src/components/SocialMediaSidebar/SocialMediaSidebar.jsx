import './SocialMediaSidebar.css'
import { VscGithubAlt } from 'react-icons/vsc'
import { FiLinkedin } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { SlSocialGoogle } from 'react-icons/sl'

function SocialMediaSidebar() {
  return (
      <div className='socialmediasidebar '>
          <ul>
              <li >
                  <a href="https://github.com/KingMenes" className="github" target="_blank">
                  <VscGithubAlt />
                  </a>
              </li>
              <li >
                  <a href="https://www.linkedin.com/in/mibrahim777/" className="linkedin" target="_blank">
                      <FiLinkedin/>
                  </a>
              </li>
              <li >
                  <a href="https://www.instagram.com/mena_macarona/" className="instagram" target="_blank">
                      <BsInstagram/>
                  </a>
              </li>
              <li >
                  <a href="mailto:menaibr96@gmail.com" className="google">
                      <SlSocialGoogle/>
                  </a>
              </li>
              <div className="vertical"></div>
          </ul> 
          <div className='email'>
              <span>menaibr96@gmail.com</span>
              <div className="vertical"></div>
          </div>

    </div>
  )
}

export default SocialMediaSidebar