import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'><span>mena.ibrahim()</span></div>
      <nav>
        <ul>
          <li><a href="/"><span>01. </span>About</a></li>
          <li><a href="/"><span>02. </span>Experience</a></li>
          <li><a href="/"><span>03. </span>Projects</a></li>
          <li><a href="/"><span>04. </span>Contact Me</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar