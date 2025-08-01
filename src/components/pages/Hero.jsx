import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container1" id='Home'>
      <div className="hero-bg"></div>
      <div className="hero-content1">
        <h1>Welcome to <br />SmartFlows</h1>
        <p>Your trusted partner in Intelligent Automation & AI Solutions</p>
        <div className="hero-buttons">
          <a href="#services">
            <button className="cta-btn">Explore Solutions</button>
          </a>
          <a href="#contact">
            <button className="cta-btn2">Contact Us</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;