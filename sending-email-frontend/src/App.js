// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import axios from "axios"
// function App() {
//   const [email,setEmail]=useState("")
//   function sendEmail(e){
//     e.preventDefault()
//     axios.post(`http://localhost:8080/send-mail?email=${email}`)
//     .then((res)=>{
//       console.log(res);
//       alert("send successful")
//     })
//     .catch((err)=>{
//       console.log(err);
//       alert("invalid credential")
//     })
//   }
//   return (
//     <div className="App">
//       <form action="">
//         <label htmlFor="">email</label>
//         <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}}  />
//         <button onClick={sendEmail} >click</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import { useState, useCallback } from 'react';
// import axios from 'axios';

// function App() {
//   const [email, setEmail] = useState('');

//   const sendEmail = useCallback(async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`http://localhost:8080/send-mail?email=${email}`)
//       console.log(response);
//       alert('Send successful');
//     } catch (error) {
//       console.error(error);
//       alert('Invalid credential');
//     }
//   }, [email]);

//   return (
//     <div className="App">
//       <form onSubmit={sendEmail}>
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <button type="submit">Click</button>
//       </form>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import axios from 'axios';
// import '../styles/mailverify.css'
const Mailverify = () => {
  let [email, setemail] = useState("");
  console.log(email);

  function verify(e) {
    e.preventDefault();
    axios.post(`http://localhost:8080/send-mail?email=${email}`)
      .then((res) => {
        console.log(res);
        alert("mail sent successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("mail not sent");
      });
  }

  return (
    <div className="mailverify">
      <form onSubmit={verify}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter the email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default Mailverify;