import React from 'react'

//Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contacts from './components/Contacts'

//Pages
import Projects from './pages/Projects'
import Footer from './pages/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
