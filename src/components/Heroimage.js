import React from 'react';
import "./Heroimagestyle.css";

import { Link } from 'react-router-dom';

const Heroimage = () => {
  return (
  
    <div className='hero'>
        <div className='mask'>
        <svg >
  <filter id="turbulence">
    <feTurbulence baseFrequency="0.01" numOctaves="3"/>
    <feColorMatrix type="hueRotate" values="0">
      <animate attributeName="values" values="0; 360" dur="3s" repeatCount="indefinite" />
     </feColorMatrix>
     <feColorMatrix type="matrix" values="0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0" />
      <feDisplacementMap in="SourceGraphic" scale="15"/>
    </filter>
     <filter id="turbulence">
      <feTurbulence type="fractalNoise" numOctaves="3">
        <animate
          attributeName="baseFrequency"
          values="0.001; 0.01"
          dur="2s" 
          repeatCount="indefinite"
         />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale="10"/> 
      </filter>
    <filter id="turbulence">
      <feTurbulence type="fractalNoise" numOctaves="3">
        <animate attributeName="baseFrequency" values="0.015; 0.0075; 0.015" dur="20s" repeatCount="indefinite" />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" />
     </filter>
</svg>
<img className='photo-img' src="https://cdn.discordapp.com/attachments/730529878696394893/1137532275756642314/H3tG2Qx0vAAAAAAElFTkSuQmCC.png" alt='cae'/>
         </div>
         <div className='content'>
          <p>HI, I'M Surya </p>
          <h1>React Developer</h1>
          <div>
            
            <Link to="https://drive.google.com/file/d/1Kcq-q9NbvDMTkOmfWJr4QWhDQulA9Sx0/view?usp=drivesdk" className="btn">Resume</Link>
            <Link to="/contact" className="btn btn-light">contact</Link>

          </div>
          </div>


    </div>
    
  );
};

export default Heroimage;