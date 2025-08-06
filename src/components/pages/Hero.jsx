import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window !== 'undefined') {
      // Check if VANTA is already available (might be loaded via CDN)
      if (window.VANTA) {
        initVanta();
      } else {
        // Load the required scripts dynamically
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
        threeScript.async = true;
        threeScript.onload = () => {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
          vantaScript.async = true;
          vantaScript.onload = initVanta;
          document.head.appendChild(vantaScript);
        };
        document.head.appendChild(threeScript);
      }
    }

    function initVanta() {
      window.VANTA.WAVES({
        el: vantaRef.current,
        color: 0x72c5 , //  0x00bcd4, // Matches your #00bcd4 color
        shininess: 30,
        waveHeight: 15,
        waveSpeed: 1,
        zoom: 1,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      });
    }

    return () => {
      // Cleanup function
      if (window.VANTA && vantaRef.current && vantaRef.current.VANTA) {
        vantaRef.current.VANTA.destroy();
      }
    };
  }, []);

  return (
    <section 
      className="hero-container" 
      id="home"
      ref={vantaRef}
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