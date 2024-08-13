import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/usernavbar.css";
const UserNavbar = () => {
  return (
    <nav className="usernavbar">
      <div className="usernavbarlogo">
        <h1>
          <b className="usernavbarmove1">Shoppers</b>
          <h1 className="usernavbarlogomove2">Cart</h1>
        </h1>
      </div>
      <div className="usernavbaroption">
        <Link to="/userhome/productview">ViewProducts</Link>
        
      </div>
      <div className="usernavbardropdown">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <AccountCircleIcon /> Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/userhome/updateuser">
              Edit Account
            </Dropdown.Item>
            <Dropdown.Item href="/">Logout</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default UserNavbar;
