import React, { useState } from 'react'

const OnChangeEvent = () => {
    const [text,setText] = useState("");
  return (
    <div>
        <h1>You Typped : {text}</h1>

        <p>Characters : {text.length}</p>
      <input 
         type = "text"
         value={text}
         onChange={(e)=> setText(e.target.value)}/>
    </div>
  )
}

export default OnChangeEvent
