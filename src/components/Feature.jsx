import React, { useState, useEffect } from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../edn images/travel site 1.jpg';
import fimage2 from '../edn images/documentation pic.jpg';
import fimage3 from '../edn images/car rental.webp';
import fimage4 from '../edn images/freightforwarding.webp';

export default function Feature() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <div id='features' className={show ? 'show' : ''}>
      <h1>SERVICES</h1>
      <div className='a-container'>
        <Featurebox
          image={fimage1}
          title='Travel Consults'
          description='Our expert travel consultants are here to guide you through every step of your journey, ensuring a smooth and enjoyable travel experience.'
        />
        <Featurebox
          image={fimage2}
          title='Documentations and Paperwork'
          description='We assist you in preparing all necessary documents for your travels, making sure you have everything you need for a hassle-free trip.'
        />
        <Featurebox
          image={fimage3}
          title='Car Sales and Rentals'
          description='Whether you need a car for a day or want to purchase one, we offer a range of vehicles to suit your needs and budget.'
        />
        <Featurebox
          image={fimage4}
          title='Freight Forwarding'
          description='Our freight forwarding services ensure your cargo is delivered safely and on time, anywhere in the world.'
        />
      </div>
    </div>
  );
}
