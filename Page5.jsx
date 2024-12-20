import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen relative p-10 bg-white'>
      <div className='h-full w-full overflow-hidden bg-black rounded-[50px]'>
        <video autoplay='true' loop muted className='h-full w-full object-cover ' src="/src/assets/video2.mp4"></video>
        <h1 className='text-[20vw] absolute uppercase bottom-0 text-white -bottom-5 left-30 font-[alag] tracking-tighter'>About</h1>
      </div>
    </div>
  )
}

export default Page5
