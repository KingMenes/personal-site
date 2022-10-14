import HeaderIllustration from '../HeaderIllustration/HeaderIllustration'
import './Header.css'
import {themes} from '../../theme.js'

function Header() {
  return (
    <div className='header'>
      <div className='blurb'>
        <span className='greeting'>Hello 👋.</span>
        <p>
          I'm <span className='name'>Mena Ibrahim.</span> I am a ... <br />
          Always learning.
        </p>
        <div className='socialMedia'>

        </div>
        <button />
      </div>
      <div className='page-art'>
        <HeaderIllustration theme={themes.dark} />
      </div>
      
    </div>
  )
}

export default Header