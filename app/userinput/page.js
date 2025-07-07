import React from 'react'
import 'remixicon/fonts/remixicon.css'

function page() {
  return (
    <div className='h-screen w-full relative '>
        <div className='mt-20 text-center text-4xl z-10 relative md:text-6xl md:leading-24 '>What do you want to achieve today ?</div>
        <p className='text-2xl text-center white-bule md:ml-46 md:text-start '>Let AI turn your goals into a smart plan.</p>
          <div className='flex flex-col h-80 w-full  items-start justify-center '>
           <div className='mx-auto'>
              <label className='text-sm'>Enter  Goals :</label> <br/>
           <div>  <input type='text' placeholder='Enter your goals or routine' className='bg-gray-500 glass-card  text-black h-10 w-96 text-start px-4 rounded-2xl outline-0 '/>   <span className='py-3 px-8 text- rounded-4xl text-black bg-blue-500 cursor-pointer'><i className="ri-arrow-right-up-fill"></i></span>  </div>
           </div>
          </div>

         




        <div className="absolute top-[-180px] left-[-100px] h-[300px] w-[300px] show z-0 overflow-hidden"></div>

         {/* <div className="absolute bottom-[-30px] right-[-30px] h-[200px] w-[200px] show1 z-0 overflow-hidden"></div> */}
    </div>
  )
}

export default page