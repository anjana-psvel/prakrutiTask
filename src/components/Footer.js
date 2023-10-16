import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/prakrutinitt/" target="_blank"><InstagramIcon /></a>
        <a href="https://www.linkedin.com/company/prakruti-nitt/?originalSubdomain=in" target="_blank"><LinkedInIcon /></a>
      </div>
      <p>Made with &#9829; by Prakruti</p>
    </div>
  )
}

export default Footer
