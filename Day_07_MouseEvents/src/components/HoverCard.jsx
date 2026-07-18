import React, { useState } from 'react'

const HoverCard = () => {
const [bgColor,setbgColor] = useState("white")
const [text,setText] = useState("Learning React")

const handleMouseEnter = () => {
  setbgColor("yellow");
  setText("Keep Going... 🚀");
};

const handleMouseLeave = () => {
  setbgColor("white");
  setText("Learning React");
};
  return (
    <div>
      <div 
      style={{
       
  backgroundColor: bgColor,
  width: "300px",
  padding: "20px",
  margin: "100px auto",
  borderRadius: "10px",
  textAlign: "center",
  transition: "0.9s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <h1>Name : React Learner</h1>
        <p 
        >{text}</p>
        </div>
    </div>
  )
}

export default HoverCard
