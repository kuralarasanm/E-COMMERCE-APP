import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';


const UserUpdate = () => {
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const [gender,setGender]=useState("")
    const data={id,name,email,age,gender,phone,password}
    const user=JSON.parse(localStorage.getItem("User"))
    useEffect(()=>{
        setId(user.id)
        setName(user.name)
        setEmail(user.email)
        setAge(user.age)
        setGender(user.gender)
        setPhone(user.phone)
        setPassword(user.password)
    },[])

    let updateData=(e)=>{
        e.preventDefault();
    axios.put(`http://localhost:8080/user`, data)
      .then((res) => {
        console.log(res);
        alert("Data update success");
      })
      .catch((err) => {
        console.log(err);
        alert("Data error");
      });
    }
    return ( 
        <div className="userupdate">
            <div className="userupdateform">
                <h1>User Update</h1>
                <form onSubmit={updateData} action="">
                <label htmlFor="">Id</label>
                <input type="number" value={id} onChange={(e)=>{setId(e.target.value)}} disabled />
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"  placeholder="Enter the name " required/>
                <label htmlFor="">Age</label>
                <input value={age} onChange={(e)=>{setAge(e.target.value)}} type="number" placeholder="Enter the age" required/>
                <label htmlFor="">phone</label>
                <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" pattern="[0-9]{10}" placeholder="Enter the phone" required/>
                <label htmlFor="">email</label>
                <label for="">branch</label>
            <select name="branch" id="" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                <option value="">male</option>
                <option value="">female</option>
            </select>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter the email" required/>
                <label htmlFor="">password</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder="Enter the password" required/>
                {/* <Button  variant="outline-success" type="submit">Register</Button>{' '} */}
                <Button variant="success" type="submit">Register</Button>{' '}
            </form>
            </div>
        </div>
     );
}
 
export default UserUpdate;