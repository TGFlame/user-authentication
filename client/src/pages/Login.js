import React from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function LoginUser (e) {
    e.preventDefault();
    var data = { email: email, password: password};
    var url = "http://localhost:1337/api/login";
    axios.post(url, data)
    .then(response=>console.log(response))
        .catch(e=>console.log(e));
  }
  return (
    <div className="Ap">
      <h1>Login Form</h1>
      <form onSubmit={LoginUser}>
        <label>Email:  </label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email"placeholder="Email"/><br></br><br></br>
        <label>Password:  </label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" /><br></br>
        <br></br>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;

