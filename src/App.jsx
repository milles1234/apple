import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PreviewSection from '../components/PreviewSection'
import './index.css'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <PreviewSection/>
    </main>
  )
}

export default App