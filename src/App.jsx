import Navbar from "./Navbar"
import './App.css'
import Project1 from "./pages/Project1"
import Project2 from "./pages/Project2"
import ContactInfo from "./pages/ContactInfo"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      
      <Navbar />
      <div className="background">
        
        <div className="container">
          
            <Routes>
              <Route path="/InteractiveResume/" element={<Home />} />
              <Route path="/InteractiveResume/project1" element={<Project1 />} />
              <Route path="/InteractiveResume/project2" element={<Project2 />} />
              <Route path="/InteractiveResume/ContactInfo" element={<ContactInfo />} />
            </Routes>

            
            
        </div>
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  )
}

export default App