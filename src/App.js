

import Weather from "./Weather"
import Home from "./Home"
import { useState , useEffect } from "react"
// import "./App.css"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
const App = () => {
  
  useEffect(() =>{
    const current = new Date();
    if(current.getHours() > 6 && current.getHours() < 18){
      document.body.style.backgroundColor = "#e6c46a";
      document.body.style.color = " black";
    }else{
      document.body.style.backgroundColor = "grey";
      document.body.style.color = " black";
    }
},[])

  return (
    <Router>

      <div > 
        
          <img src="https://i.pinimg.com/736x/6e/b0/8b/6eb08b08969a88e2e60a71e62dda2014.jpg" className="titlepic" />
          <p className="title">
            <b>Weather App</b></p>
        
        <nav>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
          </ul>
          <hr className="hr"></hr>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
        </Routes>
      </div>

    </Router>

  )
}

export default App;




















