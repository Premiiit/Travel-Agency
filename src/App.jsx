import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Hero/>
      <Destinations/>
      <WhyChooseUs/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
