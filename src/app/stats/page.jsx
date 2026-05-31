'use client';
import StatsCard from "@/components/StatsCard";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

const StatsPage = () => {
    const [chartData, setChartData] = useState([]);

    // console.log("StatsPage Rendered with chartData:", chartData);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("ButtonClickData") || "[]");

        
        const counts = storedData.reduce((acc, item) => {
            acc[item.type] = (acc[item.type] || 0) + 1;
            return acc;
        }, {});

        const formattedData = Object.keys(counts).map((key) => ({
            name: key,
            value: counts[key],
            fill: key === "call" ? "#244d3f" : key === "text" ? "#7e35e1 " :  key==="video" ? "#37a163" : "#ff7300", 
        }));

        setChartData(formattedData);
    }, []);

    return (
        <div className="max-w-8xl mx-auto p-4">
            <p className="text-5xl font-bold">FriendShip Analytics</p>
            {chartData.length === 0 ? (
              <div>                <p>No data available</p></div>
            ) : (
                <div>
                   
                    <StatsCard data={chartData} />
                </div>
            )}

            <div className="flex  gap-8 justify-center items-center">
                <div className="flex items-center gap-2">
                    <FaCircle  className="text-[#7e35e1]"/> <p>Text</p>
                </div>

                 <div className="flex items-center gap-2">
                    <FaCircle  className="text-[#244d3f]"/> <p>Call</p>
                </div>

                 <div className="flex items-center gap-2">
                    <FaCircle  className="text-[#37a163]"/> <p>Video</p>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;