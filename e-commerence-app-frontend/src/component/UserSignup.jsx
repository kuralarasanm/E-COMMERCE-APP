import axios from "axios"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import "../styles/usersignup.css"
import { useNavigate } from "react-router-dom";
function UserSignup(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const data={name,email,age,gender,phone,password}
    const navigate=useNavigate()
    const addUser=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/user`,data)
        .then((res)=>{
            console.log(res);
            alert("Data added success")
            navigate("/user")
        })
        .catch((err)=>{
            console.log(err);
            alert("Data error")
        })
    }
    return(
        <div className="usersignup">
            <div className="usersignupform">
                <h1>User Signup</h1>
                <form onSubmit={addUser} action="">
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter the name " required/>
                <label htmlFor="">Age</label>
                <input value={age} onChange={(e)=>{setAge(e.target.value)}} type="number" placeholder="Enter the age" required/>
                <label htmlFor="">phone</label>
                <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" pattern="[0-9]{10}" placeholder="Enter the phone" required/>
                <label htmlFor="">email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter the email" required/>
                <label htmlFor="">Gender</label>
                <div className="usersignupgender">
                <input type="radio" name="gender" value="male" checked={gender==="male"} onChange={(e)=>{setGender(e.target.value)}}/>
                <label htmlFor="">male</label>
                <input type="radio" name="gender" value="female" checked={gender==="female"} onChange={(e)=>{setGender(e.target.value)}}/>
                <label htmlFor="">female</label>
                
                </div>
                <label htmlFor="">password</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter the password" required/>
                {/* <Button  variant="outline-success" type="submit">Register</Button>{' '} */}
                <Button variant="success" type="submit">Register</Button>{' '}
            </form>
            </div>
        </div>
    )
}
export default UserSignup;