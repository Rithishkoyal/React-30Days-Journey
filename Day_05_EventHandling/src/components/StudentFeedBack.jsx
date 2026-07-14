import React, { useState } from 'react'

const StudentFeedBack = () => {
const [name,setName] = useState("");
const [feedback,setFeedback] = useState("");
const [rating,setRating] = useState(null);
const [submittedFeedback,setSubmittedFeedback] = useState(null);

const handleSubmit = (e)=>{
    e.preventDefault();
if(!name.trim() || !feedback.trim() || !rating){
    alert("please fill all fields");
    return;
}
  setSubmittedFeedback({
    name,
    feedback,
    rating,
  });
   setName("");
  setFeedback("");
  setRating(null);

}
const selectRating = (value) =>{
    setRating(value);
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Student Feedback Form</h1>

        <label>Name :</label>
        
        <br/>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <br/>
        <label > Feedback : </label>
        <br/>
    <textarea value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
    <br/>
    <br/>

    <label>Rate Your Experience : </label>
    <br/>
    <br/>
     <button type='button' onClick={()=>selectRating(1)}>1</button>
     <button type='button' onClick={()=>selectRating(2)}>2</button>
     <button type='button' onClick={()=>selectRating(3)}>3</button>
     <button type='button' onClick={()=>selectRating(4)}>4</button>
     <button type='button' onClick={()=>selectRating(5)}>5</button>
      {rating && (
  <p>Selected Rating: {rating} ⭐</p>
)}
     <br/>
     <br/>
    
     <button type='submit'>Submit Feedback</button></form>
      

      {submittedFeedback && (
  <div>
    <h2>
      Thank You, {submittedFeedback.name}! 🎉
    </h2>

    <p>
      Your Feedback: {submittedFeedback.feedback}
    </p>

    <p>
      Rating: {submittedFeedback.rating} ⭐
    </p>
  </div>
)}

    </div>
  )
}

export default StudentFeedBack
