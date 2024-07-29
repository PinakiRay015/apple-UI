import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Model = () => {

    useGSAP(()=>{
        gsap.to('#heading' , {opacity:1 , y:0})
    },[])
    
  return (
    <section className='w-full'>
        <div className='max-w-screen-xl mx-auto  py-20'>
            <h1 id='heading' className='section-heading'>
                Take a closer look
            </h1>

            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Model    