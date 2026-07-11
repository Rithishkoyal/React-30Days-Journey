import React,{useState} from 'react'

const HidePass = () => {
    const [pass,setpass] =useState(false);
    
  return (
    <div>

        <h1>Show / Hide Password 🔐</h1>
        <input
         type={pass ? 'text' : 'password'}
         
         />
         <button onClick={()=>setpass(!pass)} >{pass ? 'Hide' : 'Show'}</button>
      
    </div>
  )
}

export default HidePass
