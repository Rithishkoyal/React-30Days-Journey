import React, { useState } from 'react'

const SubmitEvent = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

const handleSubmit = (e)=>{
    e.preventDefault();
}

  return (
    <div>
        
        
      <h1>Login Form
      </h1>
      <form onSubmit={handleSubmit}>
      <label><strong>Email : </strong>
      <input type="email"
       value={email} 
       onChange={(e)=> setEmail(e.target.value)}/> 
       </label>
      <label><strong>Password : </strong>
      <input type="text"
      value={password} 
      onChange={(e)=> setPassword(e.target.value)} />
       </label>
      <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default SubmitEvent
