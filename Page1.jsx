import React, { useRef, useState } from 'react'
// import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const Page1 = () => {

  const tiltRef = useRef(null)
   const [xVal, setXVal] = useState(0)
   const [yVal, setYVal] = useState(0)


  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/10)
    setYVal((e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().width/2)/10)
   

    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }

  
  return (
    
    <div id='page1' onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='h-screen relative bg-white p-7'>
      <div id='page1-in' className=' absolute x-0 shadow-xl p-28 shadow-gray-700 h-full w-full rounded-[50px] bg-black bg-cover'></div>
          <img className=' relative h-32 ml-20 mt-14' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="logo" />
    <div id='tiltDiv'  ref={tiltRef} className='py-24 ml-20'>
      <h1 className='font-[anzo1] leading-[4vw] text-[4vw] uppercase flex item bg-center justify content-center relative text-white'>I am FRONTEND</h1>
      <h1 className='text-white font-bold leading-[7vw] font-[anzo1] text-[6vw] relative'>DEVELOPER</h1>
      <h1 className='font-[anzo3] leading-[4vw] text-[5vw] uppercase flex item bg-center justify content-center relative text-white'>TO HIRE</h1>
      <div>
      
      </div>
      
    </div>
          <Page1Bottom />
    </div>
    
    
  )
}

export default Page1