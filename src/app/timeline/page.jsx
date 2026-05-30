import TImelineCard from '@/components/TImelineCard';
import React from 'react';

const TimelinePage = () => {
    const [data,setData]= useState([]);

    useEfffect(()=>{
        const storedData = JSON.parse(localStorage.getItem("ButtonClickData")) || [];
        setData(storedData);
    } ,[]);

    return (
        <div>

            <div>
                <h1 className="text-2xl font-bold mb-4">Timeline</h1>

                <div>
                    {
                        sotredData.length === 0 ? <p>No interactions yet.</p> :
                        sotredData.map((data,index)=><TImelineCard key={index} data={data} />)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default TimelinePage;