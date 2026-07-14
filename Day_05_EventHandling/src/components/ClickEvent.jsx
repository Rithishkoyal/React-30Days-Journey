import React from 'react'

const ClickEvent = () => {
const handleClick = ()=>{
    alert("Button Clicked");
}

const greet = (name)=> {
    alert(`Hello ${name} 👋`);
}

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=> greet("Rithish")}> Greet Rithish</button>
    </div>
  )
}

export default ClickEvent
