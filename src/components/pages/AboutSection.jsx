import React, { useEffect, useRef, useState } from 'react';
import '../styles/AboutSection.css';
import Robot from '../../assets/robot3.png'
import '../styles/Global.css';



const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const statsRef = useRef([]);
  
  // State for animated numbers
  const [projectCount, setProjectCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          
          // Start counting animation for stats
          if (entry.target.classList.contains('stat-item')) {
            if (entry.target.querySelector('.stat-number').textContent.includes('+')) {
              // For projects (50+)
              animateValue(0, 50, 1500, setProjectCount, () => {
                entry.target.querySelector('.stat-number').textContent = '50+';
              });
            } else {
              // For satisfaction (100%)
              animateValue(0, 100, 1500, setSatisfactionCount);
            }
          }
          
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Animation function
    const animateValue = (start, end, duration, setValue, onComplete) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else if (onComplete) {
          onComplete();
        }
      };
      window.requestAnimationFrame(step);
    };

    // Observe elements
    [sectionRef.current, imageWrapperRef.current, titleRef.current, 
     descriptionRef.current, ctaGroupRef.current].forEach(el => {
      if (el) appearOnScroll.observe(el);
    });

    // Observe stats
    statsRef.current.forEach(stat => {
      if (stat) appearOnScroll.observe(stat);
    });

    return () => {
      appearOnScroll.disconnect();
    };
  }, []);

  return (
    <section className="about-section   " ref={sectionRef}>
      <div className="about-container ">
        <div className="about-left">
          <div className="image-wrapper" ref={imageWrapperRef}>
            <img
              src={Robot}
              alt="Our Team at Smart flows"
              className="about-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className="about-right">
          <h2 className="section-title Allh1 " ref={titleRef}>
            About <span>SmartFlows</span>
          </h2>
          <p className="section-description AllP headingpara " ref={descriptionRef}>
            We're a passionate team of innovators dedicated to building digital solutions that drive growth.
            With a focus on cutting-edge technology and client collaboration, we turn complex challenges
            into seamless, scalable experiences.
          </p>
          <div className="cta-group" ref={ctaGroupRef}>
            <a href="#contact" className="primary-btn">Get Started</a>
            <a href="#process" className="secondary-btn">Our Process</a>
          </div>
          <div className="stats-grid">
            <div 
              className="stat-item" 
              ref={el => statsRef.current[0] = el}
            >
              <span className="stat-number">{projectCount}+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div 
              className="stat-item" 
              ref={el => statsRef.current[1] = el}
            >
              <span className="stat-number">{satisfactionCount}%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;