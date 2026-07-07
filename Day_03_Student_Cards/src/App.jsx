import React from 'react'

import StudentCard from './components/StudentCard'
function App() {
  
const students = [
  {
    name: "Rithish",
    rollno: "23010",
    branch: "CSE",
    cgpa: 8.14,
    college: "MRUH",
    city: "Hyderabad",
    age: 21,
  },
  {
    name: "Vennela",
    rollno: "33345",
    branch: "CSE",
    cgpa: 7.2,
    college: "MRUH",
    city: "Hyderabad",
    age: 20,
  },
  {
    name: "Rishitha",
    rollno: "1234",
    branch: "EEE",
    cgpa: 5.6,
    college: "MRUH",
    city: "Hyderabad",
    age: 21,
  },
];

  return (
  <>
 {
    students.map((student,index)=>(
      <StudentCard
      key={index}
      {...student}/>
     
    ))

 }
  </>
  )
}

export default App
