import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const delay = 500; // Adjust the delay as needed

    setTimeout(() => setShowNavbar(true), delay * 0);
    setTimeout(() => setShowHeader(true), delay * 1);
    setTimeout(() => setShowFeature(true), delay * 2);
    setTimeout(() => setShowAbout(true), delay * 3);
    setTimeout(() => setShowContact(true), delay * 4);
    setTimeout(() => setShowFooter(true), delay * 5);
  }, []);

  return (
    <div className="App">
      <Navbar show={showNavbar} />
      <Header show={showHeader} />
      <Feature show={showFeature} />
      <About show={showAbout} />
      <Contact show={showContact} />
      <Footer show={showFooter} />
    </div>
  );
}

export default App;
