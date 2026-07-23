
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import EditStudent from "./pages/EditStudent";
import About from "./pages/About";
import Layout from "./components/Layout";





function App() {
 

  return (
 <BrowserRouter>
 <Routes>
 <Route path='/' element={
  <Layout>
    <Dashboard/>
  </Layout>
  }/>
 <Route path ='/students' element={
  <Layout><Students/></Layout>
  }/>
 <Route path = '/add-student' element={
  <Layout><AddStudent/></Layout>}/>
 <Route path ='/student/:id' element={
  <Layout><StudentDetails/></Layout>
 }/>
 <Route path ='/edit/:id' element={
  <Layout><EditStudent/></Layout>
 }/>
 <Route path='/about' element={
  <Layout><About/></Layout>
 }/>
 </Routes>
 </BrowserRouter>
  )
}

export default App
