import React from 'react'

function Card({ time, description, topic }) {

      
  
const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-lime-500",
  "bg-fuchsia-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-stone-500",
  "bg-neutral-500",
  "bg-zinc-500",
  "bg-gray-500",
  "bg-slate-500"
];

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };



  return (
    <div className={`h-[52vh] w-60 size-18  z-20 relative  shadow-black shadow-xl/30 bg-white/10 shadow-lg  backdrop-blur-md   rounded-2xl flex flex-col  items-center gap-10 p-5 text-center overflow-hidden `}>
      <h1 className='text-2xl z-10'>{topic}</h1>
      <p className='z-10'>{description}</p>
      <span className='z-10'>{time}</span>

      <div className={`absolute top-[-20px] left-0 h-[80px] w-[60px] show6 z-0 overflow-hidden ${getRandomColor()}`}></div>
    </div>
  )
}

export default Card