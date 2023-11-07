import React from 'react';
import './Navbar.css'; // Import your CSS file
import {logouts} from "../../Redux/action"
import { useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch();

  const logout=()=>{
    dispatch(logouts());
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div style={{display:"flex"}}>
        <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src={require("../../th.jpg")} alt="" />
        <a className="navbar-brand" href="/"> InteliManage</a>
        </div>
        <ul className="nav-links">
          <li><a href="/projects">Projects</a></li>
          <li><a href="/tasks">Tasks</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a style={{cursor:"pointer"}} onClick={logout} >Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
