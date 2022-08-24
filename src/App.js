import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./components/about";
import Game from "./components/game";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about-us" element={<About />}></Route>
        <Route exact path="/head-and-tail" element={< Game/>}></Route>
        {/* <Route exact path="/rps-dashboard" element={<RealDashBoard />}></Route> */}
      </Routes>
    </Router>


  )
}

export default App;