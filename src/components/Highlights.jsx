import React from 'react'
import VideoCarousel from './VideoCarousel'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { rightImg, watchImg } from '../utils'
const Highlights = () => {

  useGSAP(()=>{
    gsap.to('#title' , {opacity:1 , y:0 , delay:1})
    gsap.to('.link' , {opacity:1 , y:0 , delay:1.3 ,  duration:1 , stagger:0.25})
  },[])

  return (
    <section id='highlights' className='w-full overflow-hidden h-full common-padding bg-zinc-900'>
      <div className='screen-max-width'>
        {/* heading part  */}
        <div className='mb-12 md:flex items-end justify-between w-full'>
          <h1 id='title' className='section-heading'>Get the highlights.</h1>
          <div className='flex flex-wrap gap-5'>
            <p className='link'>Watch the film <img className='px-2' src={watchImg} alt="" /></p>
            <p className='link'>Watch the event <img className='px-2' src={rightImg} alt="" /></p>
          </div>
        </div>

        {/* video carousel component */}
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights