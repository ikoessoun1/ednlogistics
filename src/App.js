import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <About />
      <Contact />
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;
