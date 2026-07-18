import React,{useState} from 'react'

const ConditionalRendering = () => {
const [isPassed,setIsPassed] = useState(true);


return(
    <div 
      style={{
        backgroundColor: isPassed ? "lightgreen" : "lightcoral",
        padding: "20px",
        color:"white",
        width: "300px",
        margin: "100px auto",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
 <h1>Name : React Student</h1>
   <h2 
   style ={{
    color: isPassed?"green":"red"
   }}>Result : {isPassed ? "Passed" :"Failed"}</h2>


 <button
 onClick={()=>setIsPassed(!isPassed)}>Check Status</button>
    </div>

    
);
}
export default ConditionalRendering
