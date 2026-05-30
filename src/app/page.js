
import BannerPage from "@/components/Banner";

import AllFriendsPage from "./all-friends/page";
import FooterPage from "@/components/footer";

export default function Home() {
  return (
    <div >
     <BannerPage></BannerPage>
     <AllFriendsPage></AllFriendsPage>
     {/* <FooterPage></FooterPage> */}
     </div>
  );
}
