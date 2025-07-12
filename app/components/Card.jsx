import React from 'react'

function Card({time,description,topic}) {
  return (
    <div className='h-[50vh] w-56 size-18  z-20 relative  shadow-black shadow-xl/30 bg-white/10 shadow-lg  backdrop-blur-md   rounded-2xl flex flex-col  items-center gap-10 p-5 text-center overflow-hidden '>
          <h1 className='text-2xl z-10'>{topic}</h1>
          <p className='z-10'>{description}</p>
          <span className='z-10'>{time}</span>

          <div className="absolute top-[-20px] left-0 h-[80px] w-[60px] show6 z-0 overflow-hidden"></div>
    </div>
  )
}

export default Card