import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoref = useRef();

    useEffect(() => {
        if(videoref.current) videoref.current.playbackRate = 4
    })
  return (
    <section id='hero' className="h-screen overflow-hidden relative">
        <div>
            <h1>MacBook Pro</h1>
            <img src='./title.png' alt='mac book title'/>
        </div>
        <video ref={videoref} src="./videos/hero.mp4" autoPlay muted playsInline />
        <button>Buy</button> 
        <p>From $1599 or $133.56/month for 12 months</p>
    </section>
  )
}

export default Hero