import "./navbar.css";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {

  const {user,dispatch}=useContext(AuthContext);

  const navigate=useNavigate();
  const handle=()=>{
    navigate("/");
  }
  const login=()=>{
    navigate("/login");
  }

  const logout=()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    // <div>Navbar</div>
  <div className="navbar">
    <div className="navContainer">
          <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
          <span className="logo">AIM-Booking</span>
          </Link>
      {/* <span className="logo" onClick={handle}> AIM-Booking</span >  */}
      
      {user?(
        <div>
          <span> {user.username} </span>
          <button onClick={logout}>Logout</button>
          
          </div>
       
        
        
        
        ):(<div className="navitem">
        <button className="navButton">Register</button>
        <button onClick={login}  className="navButton">Login</button>
      </div>)}
     
    </div>
    </div>
  );
};
