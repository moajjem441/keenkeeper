import { IoIosAdd } from "react-icons/io";
import { Card, Button } from "@heroui/react";

const BannerPage = () => {
  return (
    <div className="w-9/12 mx-auto text-center mt-10 text-black">
      <h1 className="text-4xl font-bold">
        Friends to keep close in your life
      </h1>

      <p className="text-lg mt-5 mb-10 text-gray-500">
        Your personal shelf of meaningful connections.
      </p>

      <Button color="success" className="flex items-center gap-2 mx-auto bg-green-600 p-3">
        <IoIosAdd /> Add a Friend
      </Button>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
       
          <Card className="p-8 shadow-xl">
          <p className="text-2xl font-bold">10</p>
          <p className="text-gray-400">Total Friends</p>
        </Card>



        <Card className="p-8 shadow-xl">
          <p className="text-2xl font-bold">3</p>
          <p className="text-gray-400">On Track</p>
        </Card>
        

        <Card className="p-8 shadow-xl">
          <p className="text-2xl font-bold">6</p>
          <p className="text-gray-400">Need Attention</p>
        </Card>

        <Card className="p-8 shadow-xl">
          <p className="text-2xl font-bold">12</p>
          <p className="text-gray-400">Interactions This Month</p>
        </Card>
      </div>
    </div>
  );
};

export default BannerPage;