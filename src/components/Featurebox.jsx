import React, { useState } from 'react';

export default function Featurebox(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsHovered(!isHovered);

  return (
    <div className='a-box' 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      onTouchStart={handleTouchStart}>
      <div className='a-b-img'>
        <img src={props.image} alt='' />
      </div>
      <div className={`a-b-text ${isHovered ? 'show' : ''}`}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
