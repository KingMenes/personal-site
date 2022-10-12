import './Home.css'
import Header from '../../components/Header/Header'

function Home({ theme,setTheme }) {
  return (
    <div className='Home'>
          <Header theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default Home