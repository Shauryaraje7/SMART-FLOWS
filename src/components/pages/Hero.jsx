import React, { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';
import backgroundImage from '../../assets/background104.jpeg';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setImageLoaded(true);
      if (bgRef.current) {
        bgRef.current.style.backgroundImage = `url(${backgroundImage})`;
      }
    };

    // Fallback if image fails to load
    img.onerror = () => {
      if (bgRef.current) {
        bgRef.current.style.backgroundColor = '#f0fdfa';
      }
    };
  }, []);

  return (
    <section 
      className="hero-container" 
      id="home"
      ref={bgRef}
      style={{
        backgroundImage: imageLoaded ? `url(${backgroundImage})` : 'none',
        backgroundColor: '#f0fdfa' // Fallback color
      }}
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