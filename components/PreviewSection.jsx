"use client"
import React from 'react'
import clsx from "clsx";
import useMackbookStore from '../src/store'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei';
import MacbookModel14 from './models/Macbook-14';
import ModelSwitcher from './models/three/ModelSwitcher';
import StudioLights from './models/three/StudioLights';
import { useMediaQuery } from 'react-responsive'



const PreviewSection = () => {
  const {color, scale, setColor, setScale} = useMackbookStore()
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'})

  return (
    <section id='product-viewer'>
      <h2 >Take a closer look.</h2>
      <div className="controls">
            

            <div className='flex-center mt-5 gap-5'>
              <div className='color-control'>
                <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                        />
                <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
               

                       
                </div>
                 <div className="size-control">
                  <div
                   onClick={() => setScale(0.06)}
                   className={clsx(scale === 0.06 ? 'bg-white text-black': 'bg-transparent text-white'  )}
                  ><p>14"</p></div>
                  <div
                   onClick={() => setScale(0.08)}
                   className={clsx(scale === 0.08 ? 'bg-white text-black': 'bg-transparent text-white'  )}
                  ><p>16"</p></div>

              </div>
            </div>
      </div>
            
        <p className='text-white text-4xl'>Render Canvas</p>
         <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights/>
                
                <ModelSwitcher scale={isMobile ?  scale - 0.03 : scale} isMobile={isMobile}/>
            </Canvas>
    </section>
  )
}

export default PreviewSection