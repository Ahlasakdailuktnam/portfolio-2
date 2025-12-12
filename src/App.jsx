import { useState } from 'react'
import './App.css'
import Homepage from './page/Homepage'
import Navbar from './components/Nabar'
import MySkills from './page/MySkills'
import AboutMe from './page/AboutMe'
import Project from './page/Project'
import Servieces from './page/servieces'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Navbar />
     <Homepage/>
     <MySkills />
     <AboutMe />
     <Project />
     <Servieces />
     <Footer />
    </>
  )
}

export default App
