import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import "./login.css"

const Reg = () => {
    

const [credentials,setCredentials]=useState({
    username:undefined,
    password:undefined,
})

 const {loading,error,dispatch}=useContext(AuthContext);


const navigate=useNavigate();

const handleChange=(e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
})

const handleClick=async e=>{


try{

  const res=await axios.post("http://localhost:8700/api/auth/register",credentials)
 
}
catch(err){
navigate("/error")
}

}




  return (
    <div className='Login'>
        <div className="lcontainer">
          <input type="text" placeholder='Username' id="username" onChange={handleChange} className="lInput" />
          <input type="password" placeholder='Password' id="password" onChange={handleChange} className="lInput" />

          <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
           {error&&<span>{error.message}</span>}





        </div>
        
        
        
        
        </div>
  )
}

export default Reg