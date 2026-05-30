'use client';

import StatsCard from "@/components/StatsCard";
import { useEffect, useState } from "react";

const StatsPage = () => {
    const [data,setData]=useState([]);
    const [chartData,setChartData] = useState([]);

    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem("ButtonClickData")) || [];
        setData(storedData);

        const counts = storedData.reduce((acc,item)=>{
            acc[item.type] = (acc[item.type] || 0) +1;
            return acc;
        })

        const chartData =Object.keys(counts).map(key => ({
            name : key,
            value : counts[key],
            fill : key === "text" ? "#8884d8" : key === "call" ? "#82ca9d" : "#ffc658" 
        }));
        setChartData(chartData);
    } ,[]);

    // console.log("Stats Data:", data);
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            {
                data.length === 0 ? <p>No data available</p> : (
                    <div>
                        <StatsCard data={data} />
                    </div>
                )
            }
        </div>
    );
};

export default StatsPage;