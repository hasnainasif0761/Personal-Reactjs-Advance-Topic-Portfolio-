import Navbar from "./components/Navbar"
import HeroSection from './Pages/HeroSection'
import About from './Pages/About'
import Resuma from './Pages/Resuma'
import Project from './Pages/Project'
import Contact from './Pages/Contact'

function App(){
  return(
    <>
      <Navbar/>
      <HeroSection />
      <About />
      <Resuma/>
      <Project/>
      <Contact />
    </>
  )
}

export default App