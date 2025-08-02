import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = React.memo(() => {
  const bgImageRef = useRef(null);

  useEffect(() => {
    // Preload critical image
    const img = new Image();
    img.src = '/assets/background101-optimized.webp';
    img.onload = () => {
      if (bgImageRef.current) {
        bgImageRef.current.classList.add('loaded');
      }
    };

    // Load mobile image if needed
    if (window.innerWidth <= 768) {
      const mobileImg = new Image();
      mobileImg.src = '/assets/background101-mobile-optimized.webp';
    }
  }, []);

  return (
    <section className="hero-container" id="home">
      {/* Optimized background image loading */}
      <picture>
        <source 
          media="(max-width: 768px)" 
          srcSet="/assets/background101-mobile-optimized.webp" 
        />
        <img
          ref={bgImageRef}
          className="hero-bg-image"
          src="/assets/background101-optimized.webp"
          alt="Decorative background"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
        />
      </picture>
      
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
});

export default Hero;