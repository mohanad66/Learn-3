import { useState } from 'react'
import Home from './components/home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
function App() {

  return (
    <>
      <Home /> 
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      
    </>
  )

}

export default App

