import Form from "react-bootstrap/Form";
import "../styles/userlogin.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const UserLogin = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  function verifyUser(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/user/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
      console.log(res);
      alert("login successful")
      navigate("/userhome")
    })
    .catch((err)=>{
      console.log(err);
      alert("invalid credential please check email and password")
    })
  }
  return (
    <div className="userlogin">
      <div className="userloginform">
      <h1>Userlogin</h1>
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
            <button onClick={verifyUser} className="btn btn-success mx-5">Sign In</button>
            <button className="btn btn-danger mx-5"><Link to="/usersignup">Sign up</Link></button>
        </Form.Group>
      </Form>
      </div>
    </div>
  );
};

export default UserLogin;
