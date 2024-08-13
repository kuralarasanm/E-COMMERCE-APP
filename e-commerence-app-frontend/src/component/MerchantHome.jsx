import { Route, Routes } from "react-router-dom";
import MerchantNavbar from "./MerchantNavbar";
import ProductView from "./MerchantProductView";
import MerchantUpdate from "./MerchantUpdate";
import MerchantAddProduct from "./MerchantAddProduct";

const MerchantHome = () => {
    return ( 
        <div className="merchanthome">
            {/* <h1>merchanthome</h1> */}
            <MerchantNavbar/>
            
            <Routes>
                <Route path="/productview" element={<ProductView/>}/>
                <Route path="/updatemerchant" element={<MerchantUpdate/>}/>
                <Route path="/addproduct" element={<MerchantAddProduct/>}/>
            </Routes>
        </div>
     );
}
 
export default MerchantHome;