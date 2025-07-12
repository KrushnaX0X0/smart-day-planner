"use client"
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import brain from "../img/brain.png";
import ShinyText from '../components/ShinyText';

function page() {
    const [data, setdata] = useState([])
    const [formattedTime, setFormattedTime] = useState("");
    const [formattedDate, setFormattedDate] = useState("");
    // const [loading, setLoading] = useState(true);



    const loaddata = () => {
        const dataapi = localStorage.getItem("smart_day_plan")
        const parsed = dataapi ? JSON.parse(dataapi) : null;
        setdata(parsed?.day_plan)

    }




    useEffect(() => {
        loaddata()

    }, [])


    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const time = now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata",
            });

            const date = now.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "Asia/Kolkata",
            });

            setFormattedTime(time);
            setFormattedDate(date);
        };

        updateTime(); // initial call
        const interval = setInterval(updateTime, 1000); // update every second
        return () => clearInterval(interval);
    }, []);
    console.log(data)

    return (

        <div className='h-screen w-screen relative '>

            <div className='  w-full flex  gap-10 z-30 flex-wrap  '>
                <div className="text-center mb-10 w-full z-20 relative ">
                    {/* <h1 className="text-7xl font-bold"> Smart Day Planner</h1> */}
                        <ShinyText text="Smart Day Planner" disabled={false} speed={3} className='custom-class text-7xl font-bold text-white  ' />
                    <div className="text-lg text-gray-300 mt-4">
                        {formattedDate} | ⏰ {formattedTime}
                    </div>
                </div>

                <div className='min-h-[70vh] w-full flex justify-center  gap-10 z-30 flex-wrap p-6  '>
                    {
                        data?.map((iteam, index) => (
                            <div key={index} className='flex flex-col '>
                                <Card time={iteam?.time} description={iteam?.description} topic={iteam?.topic} />
                            </div>
                        )
                        )
                    }


                  

                

                </div>
            </div>




              {
                        !data ? (
                            <div className=" absolute top-0 h-screen w-screen flex flex-col items-center justify-center text-white  text-center backdrop-blur-[100px]  z-30 ">

                                <div className="animate-bounce text-8xl "> <img src={brain.src} alt="AI Brain" className="h-16 sm:h-20 inline-block ml-2 animate-float up-down-animation" /></div>


                                <h2 className="text-5xl font-semibold text-white animate-pulse z-10">
                                    No Smart Plan Found!
                                </h2>

                                <p className="   text-gray-400 text-xl z-20">Please enter your goals to generate your plan.</p>
                            </div>
                        ) : null
                    }
                     <div className="absolute top-[-20px] left-[-20px] h-[150px] w-[150px] show5 z-0 overflow-hidden"></div>

        </div>
    )
}

export default page