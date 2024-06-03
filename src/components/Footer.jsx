import React from 'react';
import '../index.css';

function Footer() {
  return (
    <footer className="footer">
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

