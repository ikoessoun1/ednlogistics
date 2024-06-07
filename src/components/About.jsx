import React, { useState, useEffect } from 'react';

export default function About() {
  const [show, setShow] = useState(false);
  const [readMore, setReadMore] = useState(false);

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

  const toggleReadMore = () => {
    setReadMore(prevReadMore => !prevReadMore);
  };

  return (
    <div id='about' className={show ? 'show' : ''}>
      <div className='about-container'>
        <div className='about-image'>
          <img src='./edn images/edn flyer 1.jpg' alt='About' />
        </div>
        <div className='about-text'>
          <h1>ABOUT US</h1>
          <p>
            EDN Logistics and Travel is a leading provider of travel and logistics services,
            committed to making your journey seamless and enjoyable. With a team of experienced professionals,
            we offer a wide range of services including travel consultations, documentation assistance,
            car sales and rentals, and freight forwarding.
          </p>
          {readMore && (
            <p>
              We strive to provide top-notch services to ensure your travel experiences are seamless and enjoyable. 
              Our team of experts is dedicated to assisting you with every step of your journey, from documentation to car rentals.
            </p>
          )}
          <button onClick={toggleReadMore}>
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
}
