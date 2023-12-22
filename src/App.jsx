
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

import { Element } from 'react-scroll';
function App() {

  return (
    <div className="flex flex-col w-full bg-black text-white">
      <NavBar />
      <Element name="header">
        <Header />
      </Element>
      <Element name="aboutme">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  )
}

export default App
