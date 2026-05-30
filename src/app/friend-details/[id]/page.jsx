import friendData from "@/app/data/friends.json";
import FriendDetailsCard from "@/components/FriendDetailsCard";


const friendDetailsPage =async ({params}) => {
    const {id}= await params;
    const friendDetails=friendData.find(friend=>friend.id=== parseInt(id));
    console.log("friendData",friendData);
    console.log("friendDetails",friendDetails);
    return (
        <div className="max-w-10/12 mx-auto">
            {/* {
             friendDetails.map(friend=><FriendDetailsCard key={friend.id} friend={friend}></FriendDetailsCard>)
            } */}
            {friendDetails && <FriendDetailsCard key={friendDetails.id} friend={friendDetails} />}
        </div>
    );
};

export default friendDetailsPage;