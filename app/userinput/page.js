"use client"
import React, { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
// import ShinyText from '../components/ShinyText';


function page() {
  
   const userLine = "go  to school "
   
  const aigenretor = async () => {
    const res = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userMessage: userLine,
    }),

  });

   const data = await res.json();
  const cleaned = data.plan.trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  const pureJson = cleaned.substring(start, end + 1);

  const parsed = JSON.parse(pureJson);
  console.log(parsed);
  }

  useEffect(() => {
    aigenretor()
  }, [])

  return (
    <div className='h-screen w-full relative '>
      <div className='mt-20 text-center text-white text-4xl z-10 relative md:text-6xl md:leading-24 '>
        {/* <ShinyText text="What do you want to  achieve today ?" disabled={false} speed={3} className='custom-class' /> */}
        What do you want to  achieve today ?
      </div>
      {/* <div className='mt-20 text-center text-4xl z-10 relative md:text-6xl md:leading-24 '>What do you want to achieve today ?</div> */}
      <p className='text-2xl text-center white-bule md:ml-46 md:text-start '>
        Let AI turn your goals into a smart plan 🤖.</p>
      <div className='flex flex-col h-80 w-full  items-start justify-center '>
        <div className='mx-auto'>
          <label className='text-md'>Enter  Goals :</label> <br />
          <div className='flex gap-2'>  <textarea type='text' placeholder='Enter your goals or routine' className='bg-gray-500 glass-card  text-black h-10 w-96 text-start px-4 rounded-2xl outline-0 ' />   <div className='h-[50px] w-[50px] text-center text-2xl flex justify-center items-center rounded-[50%] text-black bg-blue-500 cursor-pointer  '><i className="ri-arrow-right-up-fill text-center "></i></div>  </div>
        </div>
      </div>






      <div className="absolute top-[-180px] left-[-100px] h-[300px] w-[300px] show z-0 overflow-hidden"></div>

      {/* <div className="absolute bottom-[-30px] right-[-30px] h-[200px] w-[200px] show1 z-0 overflow-hidden"></div> */}
    </div>
  )
}

export default page