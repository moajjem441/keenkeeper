'use client';

import { useEffect, useState } from "react";

const StatsPage = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem("ButtonClickData")) || [];
        setData(storedData);
    } ,[]);
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            
        </div>
    );
};

export default StatsPage;