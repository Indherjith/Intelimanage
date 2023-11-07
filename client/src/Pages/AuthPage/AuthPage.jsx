import React, { useState } from 'react';
import './AuthPage.css';
import { logins,signups,loading } from '../../Redux/action';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { saveLocalData } from '../../Utiils/localStorage';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [password,setPassword] = useState("");
  const [cpassword,setCPassword] = useState("");
  const [fname,setFname] = useState("");
  const [sname,setSname] = useState("");
  const [designation,setDesig] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin=()=>{
      let payload = {email,password}
      dispatch(loading());
      dispatch(logins(payload));          
  }

  const handleSignup=()=>{
    const payload = {email,password,contact,fname,sname,designation}
    if(password === cpassword){
      dispatch(loading());
      dispatch(signups(payload));
      navigate("/auth")
    }
    else{
      alert("Passowrd and Confirm Password should be same!");
    }
  }

  return (
    <div className="auth-container">
      <div className={`auth-form ${isLogin ? 'login-form' : 'signup-form'}`}>
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        {isLogin ? (
          <form>
            <input type="email" onChange={e=>setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        ) : (
          <form>
            <input type="text" onChange={e=>setFname(e.target.value)} placeholder="First Name" />
            <input type="text" onChange={e=>setSname(e.target.value)} placeholder="Last Name" />
            <input type="email" onChange={e=>setEmail(e.target.value)} placeholder="Email" />
            <select onChange={e=>setDesig(e.target.value)} >
              <option value="manager">Manager</option>
              <option value="teamlead">Team Lead</option>
              <option value="teammember">Team Member</option>
            </select>
            <input type="text" placeholder='Contact' onChange={e=>setContact(e.target.value)} />
            <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" />
            <input type="password" onChange={e=>setCPassword(e.target.value)} placeholder="Confirm Password" />
            <button onClick={handleSignup}>Signup</button>
          </form>
        )}
        <p>
          {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
          <p className='anc' onClick={toggleForm}>
            {isLogin ? 'Signup here' : 'Login here'}
          </p>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
