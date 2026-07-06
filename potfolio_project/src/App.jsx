import { useState } from 'react'
import "./App.css";


function App() {
  

  return (
<>

<div className='container'>
  <header>
  
<h1> | Rithish Koyalkar |</h1>
<p>Aspiring Java Full Stack Developer</p>
</header>
<section>
  <h2>About Me</h2>

      <p>
        I am a Computer Science Engineering student passionate about Java,
        React, Spring Boot, and Data Structures. My goal is to become an SDE.
      </p>
</section>

    <section>
       <h2>Skills</h2>

      <ul>
        <li>Java</li>
        <li>React</li>
        <li>DSA</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </section>
    <section>
      <h2>Projects</h2>
      <ul>
        <li> Employee Management System </li>
        <li>News Blog Website</li>
        <li>Hospial Management System</li>
      
      </ul>
    </section>

    <section>
      <h2>Contact</h2>
      
      <p>
        <strong>Email : </strong>koyalkarrithish123@gmail.com</p>
      
      <p> <strong>Phone :</strong>+91 7989091082</p>
    </section>
<section className="resume">
  <button>Download Resume</button>
</section>


    <footer>
        <p>© 2026 Rithish Koyalkar</p>
    </footer>


</div>

     
</>
  )
}

export default App
