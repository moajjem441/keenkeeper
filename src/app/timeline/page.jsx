'use client';
import TImelineCard from '@/components/TImelineCard';
import React, { useEffect, useState } from 'react';

const TimelinePage = () => {
    const [data,setData]= useState([]);

    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem("ButtonClickData")) || [];
        setData(storedData);
    } ,[]);

    // console.log("Timeline Data:", data);

    return (
        <div className="min-h-[60vh]">

            <div>
                <h1 className="text-2xl font-bold mb-4">Timeline</h1>

                <div>
                    {
                        data.length === 0 ? <p>No interactions yet.</p> :
                        data.map((data,index)=><TImelineCard key={index} data={data} />)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default TimelinePage;