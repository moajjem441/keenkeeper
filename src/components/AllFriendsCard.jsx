'use client'
import {  Card} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AllFriendsCard = ({friend}) => {
const router =useRouter();
    
    return (
        <div className=" text-black mx-auto" >

            
             <Card onClick={() => router.push(`/friend-details/${friend.id}`)}
              className="w-[259px] cursor-pointer text-center p-8 rounded-2xl  shadow-xl  text-black gap-2">

      <img src={friend.picture} alt={friend.name} className="w-26 h-26 rounded-full mx-auto mb-4" />

      <h1 className="text-xl font-bold my-2">{friend.name}</h1>
       <p className="my-2 text-gray-600">{friend.days_since_contact}d ago</p>
       <p className="my-5">{
        friend.tags.map((tage,index)=><span key={index} className="text-sm bg-green-300 p-2 rounded-full text-gray-900 mr-1">{tage}</span>)
        }</p>
                
        <p>
            {
                friend.status ==='almost due' ? <span className="text-sm bg-[#efad44] p-2 rounded-full text-gray-900 mr-1">Almost Due</span> :
                friend.status ==='overdue' ? <span className="text-sm bg-[#ef4444] p-2 rounded-full text-gray-900 mr-1">Overdue</span> :
                <span className="text-sm bg-[#244d3f] p-2 rounded-full text-white mr-1">On-Track</span>
            }
        </p>
        
      </Card>

      

           

        </div>
    );
};

export default AllFriendsCard;