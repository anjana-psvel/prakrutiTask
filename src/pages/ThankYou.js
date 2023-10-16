import React from 'react'
import BannerImage from "../assets/bg.jpg"
import "../styles/ThankYou.css"


function ThankYou() {
  return (
    <div className="thank" style={{backgroundImage: `url(${BannerImage})` }}>
    <div className="message">
    <h1>Thank you for submitting the form!</h1>
    <p>You will hear from us shortly :) </p>
    </div>

    </div>
  )
}

export default ThankYou
