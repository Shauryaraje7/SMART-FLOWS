import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutusPage.css';
import Robot from '../../assets/robot3.png';
import FooterSection from '../Sections/FooterSection.jsx';

const AboutPage = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [automationHours, setAutomationHours] = useState(0);
  
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Animation for stats counting
    const animateStats = () => {
      animateValue(0, 150, 2000, setProjectsCompleted, () => {
        setProjectsCompleted(prev => prev + '+');
      });
      animateValue(0, 100, 2000, setSatisfactionRate, () => {
        setSatisfactionRate(prev => prev + '%');
      });
      animateValue(0, 5000, 2500, setAutomationHours, () => {
        setAutomationHours(prev => prev + '+');
      });
    };

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

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (entry.target.classList.contains('aboutup-stats-section')) {
            animateStats();
          }
        }
      });
    }, { threshold: 0.1 });

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: "UiPath RPA Developer",
      level: "Beginner to Advanced",
      duration: "6 weeks",
      description: "Master UiPath from basics to advanced automation techniques with real-world projects"
    },
    {
      title: "Power Automate Pro",
      level: "Intermediate",
      duration: "4 weeks",
      description: "Learn to build complex workflows and integrate with Microsoft ecosystem"
    },
    {
      title: "AI-Powered Automation",
      level: "Advanced",
      duration: "8 weeks",
      description: "Combine RPA with AI/ML for intelligent process automation"
    },
    {
      title: "Automation Architecture",
      level: "Expert",
      duration: "5 weeks",
      description: "Design and implement enterprise-scale automation solutions"
    }
  ];

  return (
    <div className="aboutup-page">
      {/* Hero Section */}
      <section className="aboutup-hero" ref={el => sectionRefs.current[0] = el}>
        <div className="aboutup-hero-content">
          <h1>Driving Digital Transformation Through Intelligent Automation</h1>
          <p>We empower businesses to achieve operational excellence with cutting-edge automation solutions</p>
          <div className="aboutup-hero-buttons">
            <Link to="/services" className="aboutup-btn-primary">Our Services</Link>
            <Link to="/courses" className="aboutup-btn-outline">Explore Courses</Link>
          </div>
        </div>
        <div className="aboutup-hero-image">
          <img src={Robot} alt="Automation technology" loading="lazy" />
          <div className="aboutup-glow-effect"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="aboutup-stats-section" ref={el => sectionRefs.current[1] = el}>
        <div className="aboutup-stat-item">
          <div className="aboutup-stat-number">{projectsCompleted}</div>
          <div className="aboutup-stat-label">Projects Completed</div>
        </div>
        <div className="aboutup-stat-item">
          <div className="aboutup-stat-number">{satisfactionRate}</div>
          <div className="aboutup-stat-label">Client Satisfaction</div>
        </div>
        <div className="aboutup-stat-item">
          <div className="aboutup-stat-number">{automationHours}</div>
          <div className="aboutup-stat-label">Hours Automated</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="aboutup-mission-section" ref={el => sectionRefs.current[2] = el}>
        <div className="aboutup-mission-content">
          <h2>Our Mission</h2>
          <p>
            To democratize automation technology, making it accessible and valuable for businesses of all sizes. 
            We bridge the gap between technical potential and practical implementation, delivering solutions that 
            drive measurable results.
          </p>
          <div className="aboutup-mission-points">
            <div className="aboutup-point">
              <div className="aboutup-point-icon">✓</div>
              <h3>Innovation</h3>
              <p>Pioneering new approaches to automation challenges</p>
            </div>
            <div className="aboutup-point">
              <div className="aboutup-point-icon">✓</div>
              <h3>Excellence</h3>
              <p>Reliable solutions with meticulous attention to detail</p>
            </div>
            <div className="aboutup-point">
              <div className="aboutup-point-icon">✓</div>
              <h3>Empowerment</h3>
              <p>Equipping clients with knowledge and tools for success</p>
            </div>
          </div>
        </div>
        <div className="aboutup-mission-image">
          <img src={Robot} alt="Our mission" loading="lazy" />
        </div>
      </section>

      {/* Courses Section */}
      <section className="aboutup-courses-section" ref={el => sectionRefs.current[3] = el}>
        <div className="aboutup-section-header">
          <h2>Automation Education</h2>
          <p>Comprehensive training programs to build automation expertise</p>
        </div>
        <div className="aboutup-courses-grid">
          {courses.map((course, index) => (
            <div className="aboutup-course-card" key={index}>
              <div className="aboutup-course-header">
                <h3>{course.title}</h3>
                <div className="aboutup-course-meta">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
              </div>
              <p>{course.description}</p>
              <Link to={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="aboutup-course-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="aboutup-capabilities-section" ref={el => sectionRefs.current[4] = el}>
        <div className="aboutup-section-header">
          <h2>Our Technical Capabilities</h2>
          <p>The tools and technologies we master to deliver exceptional results</p>
        </div>
        <div className="aboutup-capabilities-list">
          <div className="aboutup-capability">
            <div className="aboutup-capability-icon">RPA</div>
            <h3>Robotic Process Automation</h3>
            <p>UiPath, Automation Anywhere, Blue Prism, Power Automate</p>
          </div>
          <div className="aboutup-capability">
            <div className="aboutup-capability-icon">AI</div>
            <h3>Artificial Intelligence</h3>
            <p>Document understanding, machine learning, cognitive automation</p>
          </div>
          <div className="aboutup-capability">
            <div className="aboutup-capability-icon">API</div>
            <h3>System Integration</h3>
            <p>REST APIs, database connectors, legacy system automation</p>
          </div>
          <div className="aboutup-capability">
            <div className="aboutup-capability-icon">BPM</div>
            <h3>Process Optimization</h3>
            <p>Process mining, workflow analysis, performance benchmarking</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="aboutup-cta" ref={el => sectionRefs.current[5] = el}>
        <h2>Ready to Automate Your Future?</h2>
        <p>Whether you need automation solutions or want to build expertise, we have the perfect offering for you.</p>
        <div className="aboutup-cta-buttons">
          <Link to="/contact" className="aboutup-btn-primary">Get Started</Link>
          <Link to="/courses" className="aboutup-btn-outline">Browse Courses</Link>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default AboutPage;