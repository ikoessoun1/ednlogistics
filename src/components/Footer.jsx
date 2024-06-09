import React, { useState, useEffect } from 'react';

function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerPoint = document.getElementById('features').offsetTop;

      if (scrollY > triggerPoint) {
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
    <footer id='footer' className={`footer ${show ? 'show' : ''}`}>
      <div className="footer-container">
        <div className="social-media">
          <a href="https://whatsapp.com/channel/0029Vabt7RU0gcfNxxOI8j3X" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://facebook.com/EDN Logistics and Travels" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com/edn_logistics_and_travels" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://x.com/@EDN_Travels" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> X (Twitter)
          </a>
          <a href="https://www.linkedin.com/in/edn-travels2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <div className="contact-info">
          <a href="tel:0303980290"><i className="fas fa-phone-alt"></i> +233 303980290</a>
          <a href="mailto:ednlogisticsandtravels@gmail.com"><i className="fas fa-envelope"></i> ednlogisticsandtravels@gmail.com</a>
          <p><i className="fas fa-map-marker-alt"></i> SCC, around Fire Service </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
