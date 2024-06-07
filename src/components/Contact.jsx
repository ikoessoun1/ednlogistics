import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [show, setShow] = useState(false);

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

  return (
    <div id='contact' className={show ? 'show' : ''}>
      <h1> CONTACT US TODAY</h1>
      <form>
        <input id='contact form input' type='text' placeholder='Full Name' required/>
        <input type='email' placeholder='Type your E-mail' required/>
        <textarea placeholder='Write here......' name='message'></textarea>
        <input id='contact form textarea' type='submit' value='Send'/>
      </form>
    </div>
  );
}
