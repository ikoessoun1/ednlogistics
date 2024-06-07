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
    <footer className={`footer ${show ? 'show' : ''}`}>
      <div className="footer-container">
        <div className="social-media">
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://facebook.com/yourfacebookprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com/yourinstagramprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://twitter.com/yourtwitterprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> X (Twitter)
          </a>
          <a href="https://linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <div className="contact-info">
          <a href="tel:+1234567890"><i className="fas fa-phone-alt"></i> +123 456 7890</a>
          <a href="mailto:contact@ednlogistics.com"><i className="fas fa-envelope"></i> contact@ednlogistics.com</a>
          <p><i className="fas fa-map-marker-alt"></i> 123 Travel St, LogCity, Country</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
