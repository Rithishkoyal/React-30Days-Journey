import React,{useState} from 'react'

const InputState = () => {
    const [name,setname] = useState('');
   return (
    <div>
      <h1>Hello ,{name}</h1>
      <input type="text"
      value={name} 
      onChange={(e)=>setname(e.target.value)}/>
    </div>
  )
}

export default InputState
