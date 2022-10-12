import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'><span>mena.ibrahim()</span></div>
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