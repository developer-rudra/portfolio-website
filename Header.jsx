import React from 'react';
import 'remixicon/fonts/remixicon.css';
import movingMoonVideo from '../assets/moving-moon (online-video-cutter.com).mp4';

const Header = () => {
  return (
    <div className="absolute w-full fixed flex items-center justify-end z-10 py-10 px-20">
      {/* Button and Icon */}
      <div className="flex items-center mt-14 mr-9 space-x-4">
        <button className="bg-black text-white border-4 hover:bg-gray-500 px-8 py-3 text-xl rounded-full">
          Hire me
        </button>
        <i className="text-white text-4xl ri-more-2-line"></i>
      </div>

      {/* Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-[180%] right-36 z-20 h-[410px] w-[400px]"
        src={movingMoonVideo}
      ></video>
    </div>
  );
};

export default Header;
