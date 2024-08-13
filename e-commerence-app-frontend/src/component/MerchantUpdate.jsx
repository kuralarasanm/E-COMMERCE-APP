import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import "../styles/merchantupdate.css"
import axios from 'axios';

const MerchantUpdate = () => {
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [gst_number,setGst_Number]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const data={id,name,email,gst_number,phone,password}
    const merchant=JSON.parse(localStorage.getItem("Merchant"))

    useEffect(()=>{
        setId(merchant.id)
        setName(merchant.name)
        setEmail(merchant.email)
        setGst_Number(merchant.gst_number)
        setPhone(merchant.phone)
        setPassword(merchant.password)
    },[])

    let updateData=(e)=>{
        e.preventDefault();
    axios.put(`http://localhost:8080/merchants`, data)
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
        <div className="merchantupdate">
            <div className="merchantupdateform">
            <h1>UpdateMerchant</h1>
            <form onSubmit={updateData} action="">
                <label htmlFor="">Id</label>
                <input type="number" value={id} onChange={(e)=>{setId(e.target.value)}} disabled />
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"  placeholder="Enter the name " required/>
                <label htmlFor="">Gst_number</label>
                <input value={gst_number} onChange={(e)=>{setGst_Number(e.target.value)}} type="text" placeholder="Enter the Gst_number" required/>
                <label htmlFor="">phone</label>
                <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" pattern="[0-9]{10}" placeholder="Enter the phone" required/>
                <label htmlFor="">email</label>
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
 
export default MerchantUpdate;