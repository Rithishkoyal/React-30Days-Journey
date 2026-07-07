import React from 'react'

const StudentCard = (props) => {
  return (
    <div className="card">
       <img
        src="https://i.pravatar.cc/150"
        alt="Student"
        className="profile"
      />
        <h2>Student card</h2>
        <p><strong>Name</strong>: {props.name}</p>
        <p><strong>Roll No</strong> : {props.rollno}</p>
        <p><strong>Branch</strong> :{props.branch}</p>
        <p><strong>CGPA</strong>:{props.cgpa}</p>
        <p><strong>College</strong> :{props.college}</p>
        <p><strong>City</strong> : {props.city}</p>
        <p><strong>Age</strong> : {props.age}</p>
        {
          props.cgpa >= 8 ?(
            <h3>🟢 Excellent Student</h3>
          ): props.cgpa >=7?(
            <h3>🟡 Good Student</h3>
          ):(
            <h3>🔴 Needs Improvement</h3>
          )
        }

        <button>View Profile</button>
    </div>
  )
}

export default StudentCard
