import Navbar from "./Navbar"
import './App.css'
import Project1 from "./pages/Project1"
import Project2 from "./pages/Project2"
import Project3 from "./pages/Project3"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  // let component
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />
  //     break
  //   case "/project1" :
  //     component = <Project1 />
  //     break
  //   case "/project2" :
  //     component = <Project2 />
  //     break
  //   case "/project3" :
  //     component = <Project3 />
  //     break
  // }
  return (
    <>
      <Navbar />
      <div className="background">
        
        <div className="container">
          
            <Routes>
              <Route path="/InteractiveResume/" element={<Home />} />
              <Route path="/InteractiveResume/project1" element={<Project1 />} />
              <Route path="/InteractiveResume/project2" element={<Project2 />} />
              <Route path="/InteractiveResume/project3" element={<Project3 />} />
            </Routes>
          
          
        {/* {component} */}
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
    </>
  )
}

export default App