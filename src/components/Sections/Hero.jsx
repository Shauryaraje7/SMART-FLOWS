import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    // Create floating dots animation
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const ctx = canvas.getContext('2d');
      const dots = [];
      const dotCount = Math.floor(window.innerWidth / 10);
      
      // Create dots
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: `rgba(0, 188, 212, ${Math.random() * 0.5 + 0.1})`
        });
      }
      
      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw dots
        dots.forEach(dot => {
          dot.x += dot.speedX;
          dot.y += dot.speedY;
          
          // Bounce off edges
          if (dot.x < 0 || dot.x > canvas.width) dot.speedX *= -1;
          if (dot.y < 0 || dot.y > canvas.height) dot.speedY *= -1;
          
          // Draw dot
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fillStyle = dot.color;
          ctx.fill();
          
          // Draw connections
          dots.forEach(otherDot => {
            const distance = Math.sqrt(
              Math.pow(dot.x - otherDot.x, 2) + 
              Math.pow(dot.y - otherDot.y, 2)
            );
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.strokeStyle = `rgba(0, 188, 212, ${1 - distance/150})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
      
      // Handle resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className="hero-container" id="home">
      {/* Dynamic canvas background */}
      <canvas id="heroCanvas" className="hero-canvas"></canvas>
      
      {/* Gradient overlay */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Welcome to <span>SmartFlows</span></h1>
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