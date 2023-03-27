import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate();
    const again=()=>{
        navigate("/register");
    }
  return (
    <>
    <div>UserName is already used ... choose another username</div>
    <button onClick={again}>Register Again</button>

    </>

  )
}

export default Error