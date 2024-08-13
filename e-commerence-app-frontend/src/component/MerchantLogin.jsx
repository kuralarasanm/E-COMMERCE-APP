import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "../styles/merchantlogin.css"
import { useState } from "react";
import axios from "axios"
import {Link , useNavigate} from "react-router-dom"

const MerchantLogin = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  function verifyMerchant(e){
    e.preventDefault()
    // if (email=="abcd" && password=="1234") {
    //   alert("login successful")
      
    // }
    axios.post(`http://localhost:8080/merchants/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
      console.log(res.data.body);
      localStorage.setItem("Merchant",JSON.stringify(res.data.body))
      alert("login successful")
      navigate("/merchanthome")
    })
    .catch((err)=>{
      console.log(err);
      alert("invalid credential please check email and password")
    })
  }
  return (
    <div className="merchantlogin">
      <div className="merchantloginform">
      <h1>Merchant Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={e=>{setEmail(e.target.value)}} type="email"  placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={e=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
            <button onClick={verifyMerchant} className="btn btn-success mx-5 px-4">Sign In</button>
            {/* <button className="btn btn-danger mx-5">Sign up</button> */}
            <Button variant="outline-danger px-4"><Link to="/merchantsignup">Sign Up</Link></Button>{' '}
        </Form.Group>
      </Form>
      </div>
    </div>
  );
};

export default MerchantLogin;
