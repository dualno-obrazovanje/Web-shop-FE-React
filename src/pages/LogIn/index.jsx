import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_END_POINTS, SERVICES } from "../../constants/urls";
import './style.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const payload = JSON.stringify({userNameOrEMail: username, password: password})
    const loginUrl = `${SERVICES.BACKEND_BASE_URL}/${BACKEND_END_POINTS.login}/`
    axios.post(loginUrl, payload)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
      .finally(() => navigate("/landing")); 
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <TextField 
        variant="outlined" 
        label="Username" 
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="ws-login-username-input" 
      />
      <TextField 
        variant="outlined" 
        type="password" 
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)} 
        className="ws-login-password-input" 
      />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      <Link to="/" >Forgot password?</Link>
      <Link to="/signup">Create an account</Link>
    </div>
  );
};

export default LogIn;