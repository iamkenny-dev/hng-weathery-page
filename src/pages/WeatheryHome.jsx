import React from 'react'
import Autumn from '../components/Autumn'
import Hero from '../components/Hero'
import HeroBody from '../components/HeroBody'
import Population from '../components/Population'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function WeatheryHome() {
  return (
    <div>
      <Navbar />
      <Autumn />
      <Hero />
      <HeroBody />
      <Population />
      <Footer />
    </div>
  )
}


