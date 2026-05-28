import allFriendsData from "@/app/data/friends.json";
import AllFriendsCard from "@/components/AllFriendsCard";

const AllFriendsPage = () => {

    // console.log(allFriendsData);
    return (
        <div className="max-w-10/12 mx-auto"> 
        <div className="text-3xl font-bold mt-5"> <h1 >Your Friends</h1></div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-10 mt-8">
          
            {
                allFriendsData.map(friend=> <AllFriendsCard key={friend.id} friend={friend}></AllFriendsCard>   )
            }
        </div>
        </div>
    );
};

export default AllFriendsPage;