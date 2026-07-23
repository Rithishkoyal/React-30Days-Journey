import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import "../styles/layout.css"

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>

    <div className="container">
      <Sidebar/>
      <main className="content">
        {children}
      </main>

    </div>
    
    
    </>
  )
}

export default Layout
