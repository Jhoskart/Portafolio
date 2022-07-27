import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'
import Testimonials from './components/testimonials/Testimonials'
import About from './components/about/About'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
