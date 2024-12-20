import React from 'react'

const page3 = () => {
  return (
    <div className=' relative h-screen bg-white flex justify-center items-center'>
      <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
      <video autoplay="true" loop muted className='h-[50vh] w-[35vw] z-10 object-cover' src="/src/assets/video.mp4"></video>
      <div className='h-0.5 w-3/5 top-[35%] absolute z-0 bg-black'></div>
      <div className='h-0.5 w-4/5 top-[50%] absolute z-0 bg-black'></div>
      <div className='h-0.5 w-full top-[65%] absolute z-0 bg-black'></div>
    </div>
  )
}

export default page3
