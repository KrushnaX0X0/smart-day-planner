import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'


function Card({ time, description, topic, duration, emoji, priority, completed, formattedTime,ID }) { 
  const [currentminit,setcurrentminit] = useState("")
  const [taskminit,settaskminit] = useState("")
  

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const now = new Date();
  //     const currentMinutes = now.getHours() * 60 + now.getMinutes();
  //     setcurrentminit(currentMinutes)
   

  //     const parseTimeToMinutes = (str) => {
  //       const [timePart, meridian] = str.split(" ");
  //       let [hours, minutes] = timePart.split(":").map(Number);

  //       if (meridian === "PM" && hours !== 12) hours += 12;
  //       if (meridian === "AM" && hours === 12) hours = 0;

  //       return hours * 60 + minutes;
  //     };

  //     const taskMinutes = parseTimeToMinutes(time);
  //     settaskminit(taskMinutes)


  //     if (currentMinutes >= taskMinutes) {
  //       setIsCompleted(true);
  //     } else {
  //       setIsCompleted(false);
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [time]);


  const complat = (id) => {
  const stored = JSON.parse(localStorage.getItem("smart_day_plan"));
  const tasks = stored?.day_plan || [];
  const updatedTasks = tasks.map(task =>
    task.ID === id ? { ...task, completed: true } : task
  );
  localStorage.setItem("smart_day_plan", JSON.stringify({ day_plan: updatedTasks }));
  window.location.reload()

};


  const colors = [
    "color-red",
    "color-blue",
    "color-green",
    "color-yellow",
    "color-purple",
    "color-pink",
    "color-orange",
    "color-teal",
    "color-indigo",
  ];


  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  

  return (
    <div className={`h-[52vh] w-60 size-18  z-20 relative  shadow-black shadow-xl/30 bg-white/10 glass-card shadow-lg  backdrop-blur-md   rounded-2xl flex flex-col  items-center gap-5 p-5 text-center overflow-hidden `}>
          <div className='text-5xl  h-14'>  {typeof emoji === "string" && emoji.match(/\p{Emoji}/u) ? emoji : ""}</div>
      <div className={`text-xs px-2 py-1 rounded-full  text-white absolute top-0.5 left-1 glass-1 `}>{priority}</div>
         <div> <h1 className='text-2xl z-10 h-14 '>{topic}</h1></div>
      <div className='z-10 h-5 flex justify-between  w-full'>
        <div>{time}</div>
        <div>{duration}</div>
      </div>
      <div className='z-10 text-gray-500 h-14 '>{description}</div>

      <div className='absolute top-0.5 right-1.5'>

        {
          completed  ? (
            <i className="ri-checkbox-circle-line text-green-400 text-2xl"></i>
          ) : (
            <i className="ri-eye-off-fill text-green-400"></i>
          )
        }
      </div>


{
  completed ? (
 


         <div className='bg-green-800 py-1.5 px-10 rounded-md '>
      <button className='cursor-pointer text-white flex justify-center gap-1'><i className="ri-checkbox-circle-fill text-green-500 text-xl shadow-md"></i>  complated</button>
    </div>
  ) : (
      <div
      className='bg-gray-800 cursor-pointer py-1.5 px-10 rounded-md  hover:bg-amber-500 hover:text-black'
      onClick={()=>{complat(ID)}}
    >
      <button className='cursor-pointer'> Started Now</button>
    </div>
  )
}


      <div className={`absolute top-[-20px] left-0 h-[80px] w-[60px] show6 z-0 overflow-hidden ${getRandomColor()}`}></div>

     
    </div>
  )
}

export default Card