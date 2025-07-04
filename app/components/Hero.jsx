import React from 'react'
import brain from "../img/brain.png"

function Hero() {
  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center flex-col relative'>
      <div className='flex justify-center items-center flex-col'>
        <div className=' z-10 '>
          <h1 className='text-6xl text-amber-50 inline-block font-semibold'>
            <span className='text-8xl font-bold text-amber-300 font2 '> Plan </span> 
            Your Day <br /> 
             <span className=' ml-36'> Smarter with <span className='text-8xl font-bold text-amber-300 font2 '>AI</span>
              <img src={brain.src} alt="hiii" className='h-20 inline-block up-down-animation ' />
              </span></h1>
        </div>
        <p className="mt-6 text-lg text-gray-400 tracking-[2px] md:text-xl z-11"> Your personal assistant for daily productivity, goals, and smart scheduling.</p>
      </div>
      <div className='absolute top-20 show h-[300px] w-[300px]'></div>
    </div>
  )
}

export default Hero