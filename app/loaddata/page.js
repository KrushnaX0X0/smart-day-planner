"use client"
import React, { useEffect, useState } from 'react'

function page() {
    const [data, setdata] = useState({})
    // const [loading, setLoading] = useState(true);


   
    const loaddata =  () => {
        const dataapi =  localStorage.getItem("smart_day_plan")
        const parsed = dataapi ? JSON.parse(dataapi) : null;
         console.log(parsed)
   
    }
    useEffect(() => {
        loaddata()
        loaddata()
    }, [])

    return (
        <div>
        </div>
    )
}

export default page