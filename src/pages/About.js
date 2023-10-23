import React from 'react'
import BannerImage from "../assets/bg.jpg"
import "../styles/About.css"
import Carousel from '../components/Carousel'



function About() {
  return (
    <div className="aboutUs" style={{backgroundImage: `url(${BannerImage})` }}>
    <div className="message">
    <h1>About Us</h1>
    <p> The nature club of NIT Tiruchirappalli responsible for the welfare of the animals and plants. Ensuring
     that they are taken care of well 
    and also take an active responsibility in spreading awareness of nature. We are a merger of Incredible 
    NITT and Animal Welfare Club. These two clubs came together 
    to form Prakruti to commonly ensure the welfare of both 
    plants and animals. We frequently engage ourselves in taking 
    care of birds and animals in the campus, ensuring that they have 
    access to food and water. We have also planted saplings and shrubs 
    at different places around the campus. Animals are taken care of 
    by consulting a vet and given medical assistance. </p>
    <Carousel />
    </div>
    
    </div>
  )
}

export default About
