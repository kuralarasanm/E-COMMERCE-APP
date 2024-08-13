import { Link } from "react-router-dom";
import merchant from "../images/3d-illustration-cute-little-girl-eyeglasses_1142-43650.jpg";
import user from "../images/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.avif";
import "../styles/landingpage.css";
import Button from 'react-bootstrap/Button';
const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="merchant">
        <Link to="/merchant">
          <img src={merchant} alt="" /><br />
          <Button variant="warning">Merchant</Button>{' '}
        </Link>
      </div>
      <div className="user">
        <Link to="/user">
          <img src={user} alt="" /><br />
          <Button variant="info">User</Button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
