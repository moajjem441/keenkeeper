import React from 'react';

const TImelineCard = ({ data }) => {
    console.log("Timeline Card Data:", data);
    return (
        <div className="mb-4 ">
        
                {data.type === "call" ? (
                    <div className="border-1 border-gray-300 p-4 flex gap-5 rounded-2xl justify-center items-center cursor-pointer">
                        <img src="/assets/call.png" alt="Call" width={40} height={30} />
                        <p><span className="font-bold text-[#244d3f] text-2xl">Call</span> with {data.friendName}</p>
                        <p>{new Date(data.timestamp).toLocaleString()}</p>
                    </div>
                ) : data.type === "text" ? (
                    <div className="border-1 border-gray-300 p-4 flex rounded-2xl gap-5  justify-center items-center cursor-pointer">
                        <img src="/assets/text.png" alt="Text" width={40} height={30} />
                        <p><span className="font-bold text-[#244d3f] text-2xl">Text</span> with {data.friendName}</p>
                        <p>{new Date(data.timestamp).toLocaleString()}</p>
                    </div>
                ) : data.type === "video" ? (
                    <div className="border-1 border-gray-300 p-4 flex rounded-2xl gap-5  justify-center items-center cursor-pointer">
                        <img src="/assets/video.png" alt="Video" width={40} height={30} />
                        <p><span className="font-bold text-[#244d3f] text-2xl">Video</span> with {data.friendName}</p>
                        <p>{new Date(data.timestamp).toLocaleString()}</p>
                    </div>
                )
                
                : <div>No Data</div>
                
                }

        </div>
    );
};

export default TImelineCard;