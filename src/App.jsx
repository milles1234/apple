import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PreviewSection from '../components/PreviewSection'
import './index.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ShowCase from '../components/ShowCase'
import Performance from '../components/Performance'
import Features from '../components/Features'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      
      <Navbar/>
      <Hero/>
      <PreviewSection/>
      <ShowCase/>
      <Performance/>
      
    </main>
  )
}

export default App