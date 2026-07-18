import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/pages/PageNotFound";
const App= ()=> {
  return (
    <>
 
 <nav>

      <NavLink to="/"  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  })}>Home</NavLink>{" | "}


      <NavLink to="/about"  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  })}>About</NavLink>{" | "}


      <NavLink to="/contact"  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  })}>Contact</NavLink>

  
  </nav>
       <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<PageNotFound/>}/>
   </Routes>
    </>

  );
}

export default App
