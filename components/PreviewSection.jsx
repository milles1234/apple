import React from 'react'
import clsx from "clsx";
import useMackbookStore from '../src/store'




const PreviewSection = () => {
  const {color, scale, setColor, setScale} = useMackbookStore()
  return (
    <section id='product-viewer'>
      <h2 >Take a closer look.</h2>
      <div className="controls">
            <p className='info'>Macbook Pro in space black</p>

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
                  <div><p>14"</p></div>
                  <div><p>16"</p></div>

              </div>
            </div>
      </div>
            
        <p className='text-white text-4xl'>Render Canvas</p>
    </section>
  )
}

export default PreviewSection