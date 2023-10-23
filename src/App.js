import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Register from "./pages/Register";
import ThankYou from "./pages/ThankYou";
import About from "./pages/About";


function App() {
  return <div className="App"> 
  <Router>
  <Navbar />
    <Routes>
      <Route path="/" exact element ={<Home />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/thankyou" exact element={<ThankYou />} />
    </Routes>
   <Footer /> 
  </Router>   
  </div>;
}

export default App
