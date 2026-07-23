import React from 'react'
import {NavLink} from "react-router-dom";
import "../styles/sidebar.css"

const Sidebar = () => {
  return (
   <aside className='sidebar'>

    <NavLink to="/">Dashboard</NavLink>

    <NavLink to="/students">Students</NavLink>

    <NavLink to="/add-student">Add Student</NavLink>

    <NavLink to="/about">About</NavLink>

   </aside>
  )
}

export default Sidebar
