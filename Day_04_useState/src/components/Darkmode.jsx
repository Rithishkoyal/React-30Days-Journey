import React, {useState} from 'react'

const Darkmode = () => {
    const [dark,setDark] = useState(true);

  return (
    <div style={{backgroundColor:dark ? "black" :"white", color :
        dark ? "White" : "black "
    }}>
      <h1>Dark Mode Toggle 🌙☀️</h1>
       
      <button onClick={()=>setDark(!dark)}>{dark ? 'Light ☀️' : 'Dark 🌙'}</button>

    </div>
  )
}

export default Darkmode
