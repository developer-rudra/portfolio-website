import React from 'react';

const Page8 = () => {
  return (
    <div className="h-screen relative p-10 bg-white">
      <div className="h-full w-full overflow-hidden bg-black rounded-[50px] relative">
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/480p/mp4/file.mp4"
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-10 text-white uppercase font-[alag] z-20">
          <div className="text-center">
            <h1 className="text-[7vw]">Personal</h1>
            <h3 className="-mt-7 text-[1.4vw]">Honesty, Communication, Punctuality</h3>
          </div>
          <div className="text-center relative">
            <h1 className="text-[7vw]">Professional</h1>
            <h3 className="-mt-7 text-[1.4vw]">Photoshop, Wix Studio, Figma</h3>
          </div>
          <div className="text-center">
            <h1 className="text-[7vw]">Additional</h1>
            <h3 className="-mt-7 text-[1.4vw]">Business Development, Branding, SEO</h3>
          </div>
        </div>
      </div>
      {/* Video remains unchanged, text overlaps */}
      <video
        autoPlay
        loop
        muted
        className="h-[610px] w-[700px] absolute top-72 right-12 z-10"
        src="/src/assets/final-moving-obj.mp4"
      ></video>
    </div>
  );
};

export default Page8;
