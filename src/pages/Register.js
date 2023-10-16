import React from 'react'
import BannerImage from "../assets/bg.jpg"
import "../styles/Register.css"

function Register() {
  return (
    <div className="reg" style={{backgroundImage: `url(${BannerImage})` }}>
          <form id="contact-form" method="POST" accept-charset='UTF-8' action='https://app.formester.com/forms/afb8156a-2f77-4be9-a5c0-372f58c57f28/submissions'>

          <h1 style = {{color:"white"}}> Register a Complaint</h1>
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder='Enter Full Name' type= "text" />
                <label htmlFor="number">Roll Number</label>
                <input name="roll" placeHolder="Enter Roll Number" />
                <label htmlFor="number">Phone Number</label>
                <input name="phone" placeHolder="Enter Phone Number" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder='Enter email' type= "email" />
                <label htmlFor="message">Complaint</label>
                <textarea rows="6" placeholder="Enter your Complaint" name="message" required></textarea>
                <button type="submit">Send message</button>
            </form>
    </div>
  )
}

export default Register
