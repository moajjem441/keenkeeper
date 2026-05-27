import allFriendsData from "@/app/data/friends.json";
import AllFriendsCard from "@/components/AllFriendsCard";

const AllFriendsPage = () => {

    // console.log(allFriendsData);
    return (
        <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-10 p-10">
            {
                allFriendsData.map(friend=> <AllFriendsCard key={friend.id} friend={friend}></AllFriendsCard>   )
            }
        </div>
    );
};

export default AllFriendsPage;