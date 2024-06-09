import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
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

  const handleInputChange = () => {
    setError(true);

    // Scroll to the footer smoothly
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='contact' className={show ? 'show' : ''}>
      <h1 className='contact-header'>CONTACT US TODAY</h1>
      {error && <p className='error-message'>The service is currently down but you can contact us through other means.</p>}
      <form>
        <input
          id='contact-form-input'
          type='text'
          placeholder='Full Name'
          required
          onChange={handleInputChange}
        />
        <input
          type='email'
          placeholder='Type your E-mail'
          required
          onChange={handleInputChange}
        />
        <textarea
          placeholder='Write here......'
          name='message'
          onChange={handleInputChange}
        ></textarea>
        <input
          id='contact-form-submit'
          type='submit'
          value='Send'
          onClick={(e) => e.preventDefault()}
        />
      </form>
    </div>
  );
}
