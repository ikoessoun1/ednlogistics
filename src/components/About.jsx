import React, { useState, useEffect } from 'react';

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='about' className={show ? 'show' : ''}>
      <div className='about-container'>
        <div className='about-image'>
          <img src='./edn images/about.jpg' alt='About' />
        </div>
        <div className='about-text'>
          <h1>ABOUT US</h1>
          <p>
            EDN Logistics and Travel is a leading provider of travel and logistics services,
            committed to making your journey seamless and enjoyable. With a team of experienced professionals,
            we offer a wide range of services including travel consultations, documentation assistance,
            car sales and rentals, and freight forwarding.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
