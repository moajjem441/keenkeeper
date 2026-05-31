'use client'

import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { GoArchive } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiDeleteBinLine } from 'react-icons/ri';

import { toast } from 'react-hot-toast';

const FriendDetailsCard = ({ friend }) => {

   const handleButtonClick = (type) => {
    try {
        const buttonClickInfo = {
            friendId: friend?.id,
            friendName: friend?.name,
            timestamp: new Date().toISOString(),
            type,
        };

        const existingData = JSON.parse(localStorage.getItem("ButtonClickData") || "[]");
        existingData.push(buttonClickInfo);
        localStorage.setItem("ButtonClickData", JSON.stringify(existingData));

        // টোস্ট মেসেজ
        toast.success(` ${type} interaction with ${friend?.name}`);
    } catch (error) {
        console.error("Failed to save interaction:", error);
        toast.error("Failed to log interaction");
    }
};

    // console.log("friend", friend);

    return (
        <div className="grid grid-container grid-cols-12 gap-4 my-10 text-[#244d3f]">
            {/* left side  */}
            <div className="col-span-12 md:col-span-5">
                <Card className="w-full grid grid-wrap text-center p-5 rounded-2xl  shadow-lg  text-black gap-2">

                    <img src={friend?.picture} alt={friend?.name} className="w-15 h-15 rounded-full mx-auto mb-4" />

                    <h1 className="text-xl font-bold my-2">{friend?.name}</h1>



                    <p>
                        {
                            friend?.status === 'almost due' ? <span className="text-sm bg-[#efad44] p-2 rounded-full text-gray-900 mr-1">Almost Due</span> :
                                friend?.status === 'overdue' ? <span className="text-sm bg-[#ef4444] p-2 rounded-full text-gray-900 mr-1">Overdue</span> :
                                    <span className="text-sm bg-[#244d3f] p-2 rounded-full text-white mr-1">On-Track</span>
                        }
                    </p>

                    <p className="my-5">{
                        friend?.tags.map((tage, index) => <span key={index} className="text-sm bg-green-300 p-2 rounded-full text-gray-900 mr-1">{tage}</span>)

                    }</p>


                    <p className="my-2 text-gray-600">{friend?.bio}</p>
                    <p className="my-2 text-gray-600">Preferred : {friend?.email}</p>

                </Card>



                <div >
                    <Card className="p-8 shadow-lg">
                        <div className="flex items-center gap-2 justify-center">
                            <IoMdNotificationsOutline />
                            <p className="text-gray-600">Snooze 2 Weeks</p>
                        </div>
                    </Card>
                </div>


                <div >
                    <Card className="p-8 shadow-lg">
                        <div className="flex items-center gap-2 justify-center">
                            <GoArchive />
                            <p className="text-gray-600">Archive</p>
                        </div>
                    </Card>
                </div>



                <div >
                    <Card className="p-8 shadow-lg">
                        <div className="flex items-center gap-2 justify-center">
                            <RiDeleteBinLine />
                            <p className="text-red-500">Delete</p>
                        </div>
                    </Card>
                </div>




            </div>



            {/* right side  */}


           <div className="col-span-12 md:col-span-7">


             <div className="col-span-4 row-span-1">
               <div className="grid grid-cols-3  gap-4">
            
                 <Card className="sm:p-4 md:p-8 shadow-lg">
                    <p className="sm:text-lg md:text-2xl font-bold">
                        {friend?.days_since_contact
                        }
                    </p>
                    <p className="sm:text-sm md:text-gray-400">Days Since Contact</p>
                </Card>


                <Card className="sm:p-4 md:p-8 shadow-lg">
                    <div>
                        <p className="sm:text-lg md:text-2xl font-bold">
                        {friend?.goal
                        }
                    </p>
                    <p className="sm:text-sm md:text-gray-400">Goal (Days)</p>
                    </div>

                

                </Card>


                <Card className="sm:p-4 md:p-8 shadow-lg">
                    <p className="sm:text-lg md:text-2xl font-bold">
                        {friend?.next_due_date
                        }
                    </p>
                    <p className="sm:text-sm md:text-gray-400">Next Due Date</p>
                </Card>
               </div>

                
            </div>



            <div className="col-span-5 row-span-1">
                <Card className="p-8 shadow-lg ">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                        <p>Relationship Goal</p>
                        <p className="text-xl font-bold">  Connect every
                            {friend?.goal
                            }Days
                        </p>
                    </div>



                    <div>
                        <Button variant="outline"  >
                            Edit
                        </Button>
                    </div>

                    </div>
                </Card>
            </div>






            <div className="col-span-6 row-span-1 ">
                <Card className="p-8 shadow-lg">
                  <h1 className="text-xl font-bold mb-4">Quick Check-In</h1>

                <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4 p-4 ">

                      <Button onClick={() => handleButtonClick('call')}>
                      <div className="border-1 border-gray-300  p-4  flex flex-col justify-center items-center cursor-pointer">
                    <Image src="/assets/call.png" alt="Call" width={20} height={20} />
                    
                        Call
                    
                  </div>

                  </Button>

                  


                      <Button onClick={() => handleButtonClick('text')}>
                   <div className="border-1 border-gray-300  p-4  flex flex-col justify-center items-center cursor-pointer">
                    <Image src="/assets/text.png" alt="Text" width={20} height={20} />
                    
                        Text
                    
                  </div>

                  </Button>



                     <Button onClick={() => handleButtonClick('video')}>
                   <div className="border-1 border-gray-300  p-4  flex flex-col justify-center items-center cursor-pointer">
                    <Image src="/assets/video.png" alt="Video" width={20} height={20} />
                   
                        Video
                    
                  </div>
                  </Button>

                </div>


                </Card>
            </div>




           </div>




        </div>
    );
};

export default FriendDetailsCard;