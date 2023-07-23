import React from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function RegisterUser (e) {
    e.preventDefault();
    var data = {name: username, email: email, password: password};
    var url = "http://localhost:1337/api/register";
    axios.post(url, data)
    .then(response=>console.log(response))
        .catch(e=>console.log(e));
  }
  return (
    <div className="Ap">
      <h1>Register Form</h1>
      <form onSubmit={RegisterUser}>
        <label>Username:  </label>
        <input value={username}
        type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" /><br></br><br></br>
        <label>Email:  </label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email"placeholder="Email"/><br></br><br></br>
        <label>Password:  </label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" /><br></br>
        <br></br>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
