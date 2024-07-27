import React , {useEffect, useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo , smallHeroVideo} from '../utils'
const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  useGSAP(()=>{
    gsap.to("#hero" , {opacity:1 , delay:2})
    gsap.to('#cta' , {opacity:1 , delay:2 , y:-20})
  }, [])

  const handleHeroVideo = ()=>{
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize' , handleHeroVideo);

    return () =>{
      window.removeEventListener('resize' , handleHeroVideo)
    }
  }, [])

  return (
    <section className='w-full h-[90vh] relative'>
        <div className='flex justify-center items-center flex-col h-5/6 w-full'>
          <p id='hero' className='hero-title'>Iphone 15 pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} />
          </video>
        </div>
        </div>
        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20 w-fit mx-auto'>
          <a href='#highlights' className='btn'>Buy Now</a>
          <p className='font-normal text-xl'>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero