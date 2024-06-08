import React, { useEffect, useState } from 'react';

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after a short delay to allow the component to render
    const timeout = setTimeout(() => {
      setShow(true);
    }, 200);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="main" className={show ? 'fade-in' : ''}>
      <div className="header-heading">
        <h2>WELCOME TO</h2>
        <h1><span>EDN LOGISTICS AND TRAVEL</span></h1>
        <p className="details">
          where every journey begins with a dream! Whether you're seeking adventure, relaxation, or cultural exploration, we're here to make your travel dreams come true. Start your adventure with us and discover the world like never before. Let's create unforgettable memories together!
        </p>
        <div className="header-btns">
          <a href="https://ednlogisticsandtravels.simplybook.me/v2/#" className="header-btn"> BOOK A CONSULTATION </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
