import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/merchantnavbar.css";
const MerchantNavbar = () => {
  return (
    <nav className="merchantnavbar">
      <div className="merchantnavbarlogo">
        <h1>
          <b className="merchantnavbarmove1">Shoppers</b>
          <h1 className="merchantnavbarlogomove2">Cart</h1>
        </h1>
      </div>
      <div className="merchantnavbaroption">
        {/* <Link to="/merchanthome">Home</Link> */}
        <Link to="/merchanthome/productview">View Products</Link>
        <Link to="/merchanthome/addproduct">Add Product</Link>
      </div>
      <div className="merchantnavbardropdown">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <AccountCircleIcon /> Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/merchanthome/updatemerchant">
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

export default MerchantNavbar;
