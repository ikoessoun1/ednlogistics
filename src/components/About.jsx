import React, { useState } from 'react';
import aboutimage from '../edn images/edn flyer 1.jpg';
import '../index.css';

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutimage} alt="About Us" />
        </div>
        <div className="about-text">
          <h1>LEARN MORE ABOUT US</h1>
          <p>
            EDN Logistics and Travels specializes in consultation, helping you facilitate the necessary documents for travels and logistics. We also offer freight forwarding and car rentals and sales.
            {showMore && (
              <span>
                We strive to provide top-notch services to ensure your travel experiences are seamless and enjoyable. Our team of experts is dedicated to assisting you with every step of your journey, from documentation to car rentals.
              </span>
            )}
          </p>
          <button onClick={toggleReadMore}>
            {showMore ? 'SHOW LESS' : 'READ MORE'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
