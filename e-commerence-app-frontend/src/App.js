import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./component/LandingPage";
import MerchantLogin from "./component/MerchantLogin"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserLogin from "./component/UserLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignup from "./component/MerchantSignup";
import MerchantHome from "./component/MerchantHome";
import UserHome from "./component/UserHome";
import UserSignup from "./component/UserSignup";
import Error from "./component/Error";
import MerchantProtect from "./component/MerchantProtect";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/*" element={<Error/>}/>
          <Route path="/merchant" element={<MerchantLogin/>}/>
          <Route path="/user" element={<UserLogin/>}/>
          <Route path="/merchantsignup" element={<MerchantSignup/>}/>
          <Route path="/merchanthome/*" element={<MerchantProtect Child={MerchantHome}/>}/>
          <Route path="/userhome" element={<UserHome/>}/>
          <Route path="/usersignup" element={<UserSignup/>}/>
          {/* <Route path="/userhome/*" element={<Protect1 Child={UserHome}/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
