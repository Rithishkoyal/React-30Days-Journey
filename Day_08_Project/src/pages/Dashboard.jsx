import React from 'react'
import students from '../data/students'
import StatCard from '../components/StatCard'
import "../styles/dashboard.css"

const Dashboard = () => {

  const totalStudents = students.length;

  const totalCourses = new Set(
    students.map((student)=> student.course)

  ).size;
  const activeStudents = students.filter(
    (student)=>student.status ==="Active"
  ).length



  return (
    <div>
        <h1>Dashboard Page </h1>

      <div className="cards">
        <StatCard title="Total Students" value={totalStudents} />
        <StatCard title="Courses" value={totalCourses} />
        <StatCard title="Active Students" value={activeStudents} />
      </div>

      <h2>Recent Students</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Dashboard
