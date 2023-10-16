import React from 'react'
// import {Link} from "react-router-dom"
import "../styles/Home.css"
import BannerImage from "../assets/bg.jpg"
import {Animals} from "../helpers/animals";
import Card from "../components/Card"


function Home() {
  return ( 
    <div className="home" style={{backgroundImage: `url(${BannerImage})` }}>
          <div className='dogs'>
        {/* <h1 className='menuTitle'>Our Menu</h1> */}
        <div className="dogList">
            {Animals.map((dogItem, index)=>{
                return (<Card 
                key={index} 
                image={dogItem.image} 
                name={dogItem.name} 
                origin={dogItem.origin} 
                link={dogItem.link}
                />);
            })}
        </div>
    </div>
    
    </div>
    
    
  )
}

export default Home
