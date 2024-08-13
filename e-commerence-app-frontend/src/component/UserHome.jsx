import { Route, Routes } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserUpdate from "./UserUpdate";
import MerchantProductView from "./MerchantProductView";
const UserHome = () => {
    return ( 
        <div className="userhome">
            {/* <h1>user home</h1> */}
            <UserNavbar/>

            <Routes>
                <Route path="/productview" element={<MerchantProductView/>}/>
                <Route path="/updateuser" element={<UserUpdate/>}/>
            </Routes>
        </div>
     );
}
 
export default UserHome;