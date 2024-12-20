import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Page9 = () => {
  useEffect(() => {
    // GSAP animation for circular motion
    gsap.to('.circular-image', {
      rotation: 360,
      transformOrigin: '50% 50%',
      repeat: -1,
      ease: 'linear',
      duration: 5, // Duration for one full circle
    });
  }, []);

  return (
    <div>
      <div className='h-screen relative p-10 bg-white'>
        <div className='h-full w-full overflow-hidden bg-black rounded-[50px]'>
          <video 
            autoPlay 
            loop 
            muted 
            className='h-full w-full object-cover' 
            src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/480p/mp4/file.mp4"
          ></video>
          <h1 className='text-[12.8vw] absolute uppercase top-10 text-white -bottom-5 left-32 font-[alag] tracking-tighter'>Got An</h1>
          <h1 className='text-[12.8vw] absolute uppercase top-72 text-gray-500 -bottom-5 left-32 font-[alag] tracking-tighter'>Idea</h1>
          <h3 className='text-[1.5vw] absolute uppercase top-[75%] text-white left-32 font-[alag]'>
            IT IS NOT JUST ABOUT SOLVING THE PROBLEM BUT
          </h3>
          <h3 className='text-[1.5vw] font-bold absolute uppercase top-[80%] text-gray-400 left-32 font-[alag]'>
            OFFERING THE TRANSFORMATION!
          </h3>

          {/* Image with Circular Animation */}
          <img 
            className='h-32 ml-20 mt-14 absolute top-96 left-[47%] circular-image' 
            src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png" 
            alt="" 
          />

          <h3 className='text-[1.5vw] absolute uppercase top-[47%] text-gray-500 font-thin left-[60%] font-[alag]'>
            WORLD SERVICE
          </h3>
          <h3 className='text-[1.5vw] absolute uppercase top-[51.8%] font-bold text-white left-[60%] font-[alag]'>
            I CAN COME TO WHEREVER YOU ARE.
          </h3>
          <h3 className='text-[1.5vw] absolute top-[57%] text-gray-500 font-thin left-[60%]'>
            panigrahirudraprasad1@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page9;
