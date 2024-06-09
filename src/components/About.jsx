import React, { useState, useEffect } from 'react';
import flyer1 from '../edn images/flyer1.jpg';
import flyer2 from '../edn images/flyer2.jpeg';
import flyer3 from '../edn images/flyer3.jpg';
import flyer4 from '../edn images/flyer4.jpg';

export default function About() {
  const [show, setShow] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1); // State to keep track of current slide

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide >= 4 ? 1 : prevSlide + 1));
    }, 10000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const toggleReadMore = () => {
    setReadMore((prevReadMore) => !prevReadMore);
  };

  const handleImageClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide >= 4 ? 1 : prevSlide + 1));
  };

  const getImageSrc = (slideNumber) => {
    switch (slideNumber) {
      case 1:
        return flyer1;
      case 2:
        return flyer2;
      case 3:
        return flyer3;
      case 4:
        return flyer4;
      default:
        return flyer1;
    }
  };

  return (
    <div id="about" className={show ? 'show' : ''}>
      <div className="about-container">
        <div className="about-image" onClick={handleImageClick}>
          <img src={getImageSrc(currentSlide)} alt={`Slide ${currentSlide}`} />
        </div>
        <div className="about-text">
          <h1>ABOUT US</h1>
          <p>
            EDN Logistics and Travel is a leading provider of travel and logistics services, committed to making your
            journey seamless and enjoyable. With a team of experienced professionals, we offer a wide range of services
            including travel consultations, documentation assistance, car sales and rentals, and freight forwarding.
          </p>
          {readMore && (
            <p>
              We strive to provide top-notch services to ensure your travel experiences are seamless and enjoyable. Our
              team of experts is dedicated to assisting you with every step of your journey, from documentation to car
              rentals.
            </p>
          )}
          <button onClick={toggleReadMore}>{readMore ? 'Read Less' : 'Read More'}</button>
        </div>
      </div>
    </div>
  );
}
