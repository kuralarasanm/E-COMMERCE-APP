import { useState } from "react";
import "../styles/merchantsignup.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function MerchantSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gst_number, setGst_Number] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const data = { name, email, gst_number, phone, password };
  const navigate = useNavigate();
  const addMerchant = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/merchants`, data)
      .then((res) => {
        console.log(res);
        alert("Data added success");
        navigate("/merchant");
      })
      .catch((err) => {
        console.log(err);
        alert("Data error");
      });
  };
  return (
    <div className="merchantsignup">
      <div className="merchantsignupform">
        <h1>Merchant SignUp</h1>
        <form onSubmit={addMerchant} action="">
          <label htmlFor="">Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter the name "
            required
          />
          <label htmlFor="">Gst_number</label>
          <input
            value={gst_number}
            onChange={(e) => {
              setGst_Number(e.target.value);
            }}
            type="text"
            placeholder="Enter the Gst_number"
            required
          />
          <label htmlFor="">phone</label>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter the phone"
            required
          />
          <label htmlFor="">email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter the email"
            required
          />
          <label htmlFor="">password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter the password"
            required
          />
          {/* <Button  variant="outline-success" type="submit">Register</Button>{' '} */}
          <Button variant="success" type="submit">
            Register
          </Button>{" "}
        </form>
      </div>
    </div>
  );
}

export default MerchantSignup;
