import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section 
      className="hero-container" 
      id="home"
    >
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Welcome to <br />SmartFlows</h1>
        <p>Your trusted partner in Intelligent Automation & AI Solutions</p>
        <div className="hero-buttons">
          <a href="#services" aria-label="Explore our solutions">
            <button className="cta-btn">Explore Solutions</button>
          </a>
          <a href="#contact" aria-label="Contact us">
            <button className="cta-btn2">Contact Us</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);