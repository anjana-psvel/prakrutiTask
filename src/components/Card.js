import React from 'react'
// import LinkIcon from '@mui/icons-material/Link';
import PetsIcon from '@mui/icons-material/Pets';

function Animal({image, name, origin, link}) {
  return (
    <div className="dogItem">
      <div style={{backgroundImage: `url(${image})` }}></div>
      <div className="stuff">
      <div className="info">
      <h1>{name}</h1>
      <p>Origin:{origin}</p>
      </div>   
      <a href={link} className="link" target="_blank" ><PetsIcon fontSize='medium'  /></a>
      </div>
      
    </div>
  )
}

export default Animal

