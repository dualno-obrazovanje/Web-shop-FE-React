import React, {useEffect, useRef, useState} from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import './style.css';
import { JSON_SERVER_END_POINTS, SERVICES } from "../../constants/urls";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('');
  const signupButton = useRef();
  const nav = useNavigate();
  
  useEffect(() => {
    password === confirmPassword ? setIsButtonDisabled(false) : setIsButtonDisabled(true) 
  }, [password, confirmPassword])

  const handleSignUp = () => {
    const payload = {id: uuid(), username: username, password: password}
    const url = `${SERVICES.JSON_SERVER_BASE_URL}/${JSON_SERVER_END_POINTS.users}`
    axios.post(url, payload).then(() => {
      nav('/');
    }).catch(err => console.error(err));
  };


  return (
    <div className="signup-form">
      <h1>Sign up</h1>
      <TextField 
        variant="outlined" 
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="ws-signup-username-input" 
      />
      <TextField 
        variant="outlined" 
        type="password" 
        label="Password" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="ws-signup-password-input" 
      />
      <TextField 
        variant="outlined" 
        type="password" 
        label="Confirm Password" 
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        className="ws-signup-confirm-password-input" 
      />
      <Button variant="contained" onClick={handleSignUp} ref={signupButton} disabled={isButtonDisabled}>Sign Up</Button>
      <Link to="/">Already have an account?</Link>
    </div>
  );
};

export default SignUp;