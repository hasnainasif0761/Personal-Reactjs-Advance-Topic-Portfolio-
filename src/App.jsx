import Navbar from "./components/Navbar"
import HeroSection from './Pages/HeroSection'
import About from './Pages/About'
import Resuma from './Pages/Resuma'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import 'locomotive-scroll/dist/locomotive-scroll.css'

function App(){
  const scrollRef = useRef(null);

  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      smartphone: {smooth:true},
      tablet: { smooth:true }
    })

    setTimeout(() => scroll.update(), 1000);

    return ()=> scroll.destroy()

  },[])


    return(
      <div data-scroll-container ref={scrollRef}>
        <div data-scroll-section>
          <Navbar/>
          <HeroSection />
        </div>
        <div data-scroll-section>
          {/* <About /> */}
        </div>
        <div data-scroll-section>
          <Resuma/>
        </div>
        <div data-scroll-section>
          <Project/>
        </div>
        <div data-scroll-section>
          <Contact />
        </div>
      </div>
    )
}

export default App