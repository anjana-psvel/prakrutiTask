import React , {useState} from 'react'
import Logo from "../assets/logo.png"
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    // const location = useLocation()
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

  return (
    <div className="navbar">
    <div className="leftSide" id={openLinks? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/register">COMPLAINT</Link>
            </div>
    </div>
    <div className="rightSide">
    {/* {location.pathname !== '/' ? <button className="blogButton"><Link to="/">Pup Blog</Link></button> : <button className="registerButton"><Link to="/register">Register a Complaint</Link></button>}    */}
                <div className="nav-links" id="navLinks">
                <ul>
                    <li><a href=""><Link to="/">HOME</Link></a></li>
                    <li><a href=""><Link to="/about">ABOUT</Link></a></li>
                    <li><a href=""><Link to="/blog">BLOG</Link></a></li>
                    <li><a href=""><Link to="/register">COMPLAINT</Link></a></li>
                </ul>  
                </div>
                <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
    </div>
</div>
  )
}

export default Navbar
