import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Register from "./pages/Register";
import ThankYou from "./pages/ThankYou";


function App() {
  return <div className="App"> 
  <Router>
  <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/thankyou" exact element={<ThankYou />} />
    </Routes>
   <Footer /> 
  </Router>
    
  </div>;


    

  
}

export default App
