import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../edn images/logo.PNG';

function Navbar() {
  const [show, setShow] = useState(false);
  const [showNoOffers, setShowNoOffers] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const handleOfferClick = () => {
    setShowNoOffers(true);
    setTimeout(() => setShowNoOffers(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <nav className={`nav ${show ? 'active' : ''}`}>
      <Link to='main' smooth={true} duration={1000} className='logo'>
        <img src={logo} alt='Logo' />
      </Link>

      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>

      <ul className='menu'>
        <li>
          <Link to='main' smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to='features' smooth={true} duration={1000}>
            SERVICES
          </Link>
        </li>
        <li>
          <Link to='offer' smooth={true} duration={100} onClick={handleOfferClick}>
            Offer
          </Link>
          {showNoOffers && (
            <div className="no-offers-overlay">
              <div className="no-offers-message">
                There are no offers currently. You can check back in a few or contact us for surprises.
              </div>
            </div>
          )}
        </li>
        <li>
          <Link to='about' smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;