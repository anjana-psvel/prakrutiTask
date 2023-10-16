import React  from 'react'
import Logo from "../assets/logo.png"
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
    const location = useLocation()

  return (
    <div className="navbar">
    <div className="leftSide">
        <img src={Logo} />
    </div>
    <div className="rightSide">
    {location.pathname !== '/' ? <button className="blogButton"><Link to="/">Pup Blog</Link></button> : <button className="registerButton"><Link to="/register">Register a Complaint</Link></button>}     
    </div>
</div>
  )
}

export default Navbar
