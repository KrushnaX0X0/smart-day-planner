import React from 'react';
import brain from "../img/brain.png";

function Hero() {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center flex-col px-4 relative">
      <div className="flex justify-center items-center flex-col w-full text-center">
     
        <div className="z-10 ">
          <div className="">
            <span className=" text-8xl  text-amber-300 font2">Plan </span>
            <span className='text-5xl not-last text-amber-50'> Your Day </span>
            <br />
          </div>

          <div >
           <span className="text-5xl text-amber-50 md:text-right">Smarter with</span>  <span className="text-8xl text-amber-300 font2">AI</span>
            <img src={brain.src} alt="AI Brain" className="h-16 sm:h-20 inline-block ml-2 animate-float up-down-animation" />
          </div>
        </div>

      
        <p className="mt-6 text-md sm:text-lg md:text-xl text-gray-400 tracking-wide text-center max-w-2xl z-10">
          Your personal assistant for daily productivity, goals, and smart scheduling.
        </p>
      </div>

   
      <div className="absolute top-20 h-[300px] w-[300px] show"></div>
    </div>
  );
}

export default Hero;
