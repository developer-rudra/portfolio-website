import React from 'react'

const Page4 = () => {
  return (
    <div id='alagBaat' tracking-tighter className='h-screen p-10 bg-white relative'>
      <h1 className='text-[15vw] font-semibold font-[alag] absolute uppercase  top-20 left-20 tracking-tighter'>what</h1>
      <h2 className='text-[15vw] font-semibold font-[alag] absolute uppercase text-white bottom-36 font-[alag] left-24 tracking-tighter'>I Do</h2>
      <div className='h-full w-full bg-black rounded-[50px] h-full w-full overflow-hidden'>
        <video autoplay='true' loop muted className='h-full w-full object-cover ' src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/480p/mp4/file.mp4"></video>
       <div className='absolute top-[78.6%] left-24 mt-6 text-[21px]'>
       <h3 className='text-white font-bold  '>I DESIGN AND DEVELOP</h3>
       <h3 className='text-white font-semibold text-gray-600'>MODERN, IMPACTFUL AND LUXURIOUS</h3>
       <h3 className='text-white font-bold'>websites that seamlessly bridge your goals with needs of your clients</h3>
       </div>
      </div>
      <div>
      <video autoplay='true' className='h-[700px] w-[600px] absolute right-24 top-10 right-10' loop muted src="/src/assets/astro.mp4"></video>
        
      </div>
    </div>
  )
}

export default Page4
