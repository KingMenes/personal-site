import './Navbar.css'
import {useState} from 'react'

function Navbar({ theme }) {
  const [currTheme, setCurrTheme] = useState(theme);

  return (
    <div className='navbar'>
      <span>mena.ibrahim()</span>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Experience</a></li>
          <li><a href="/">Contact Me</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar