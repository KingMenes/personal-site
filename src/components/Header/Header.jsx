import React from 'react'
import HeaderIllustration from '../HeaderIllustration/HeaderIllustration'
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar'
import './Header.css'
import { themes } from '../../theme.js'
import Typical from 'react-typical'

function Header() {
  const HeaderTitleTypeAnimation = React.memo( () => {
    return <Typical
    steps={[' Developer.',2000,'n Engineer.', 2000, ' Builder.', 2000]}
    loop={Infinity}
    wrapper="span"
  />
  }, (props, prevProp) => true);

  return (
    <div className='header'>

      <div className='blurb'>
        <span className='greeting'>Hello 👋.</span>
        <p>
          My name is <span className='name'>Mena Ibrahim.</span>
          <br />I am a
          <HeaderTitleTypeAnimation/>
          <br />
          Always learning.
        </p>
        <button className='contact-btn'>Contact Me</button>
      </div>

      <div className='page-art'>
        <HeaderIllustration theme={themes.dark} />
      </div>
      
    </div>
  )
}

export default Header