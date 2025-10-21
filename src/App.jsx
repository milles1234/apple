import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PreviewSection from '../components/PreviewSection'
import './index.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ShowCase from '../components/ShowCase'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      
      <Navbar/>
      <Hero/>
      <PreviewSection/>
      <ShowCase/>
    </main>
  )
}

export default App