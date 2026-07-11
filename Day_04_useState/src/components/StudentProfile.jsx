import React,{useState} from 'react'


const StudentProfile = () => {
    const [name,setname] = useState('');
    const [age,setage] = useState("");
    const [course,setcourse]= useState('');
    const [student,setstudent] = useState(null);
  return (
    <div>
      <h1>Student Profile</h1>
     <label><strong>Name : </strong> <input type="text" value={name} onChange={(e)=>setname(e.target.value)} /></label>
      <label><strong>Age : </strong><input type="number" value={age} onChange={(e)=>setage(e.target.value)}/></label>
     <label><strong>Course : </strong><input type="text"value={course} onChange={(e)=>setcourse(e.target.value)} /></label> 
      <button onClick={()=>
       setstudent({
        name,age,course
       })
      }>Submit</button>

      {student && (<div>
        <p>Name is {student.name}</p>
        <p>Age is {student.age}</p>
        <p>Course is {student.course}</p>
    </div>)}

    </div>
  )
}

export default StudentProfile
