import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutPage.css';
import Robot from '../../assets/robot3.png';

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
          if (entry.target.classList.contains('stats-section')) {
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" ref={el => sectionRefs.current[0] = el}>
        <div className="hero-content">
          <h1>Driving Digital Transformation Through Intelligent Automation</h1>
          <p>We empower businesses to achieve operational excellence with cutting-edge automation solutions</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">Our Services</Link>
            <Link to="/courses" className="btn-outline">Explore Courses</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={Robot} alt="Automation technology" loading="lazy" />
          <div className="glow-effect"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={el => sectionRefs.current[1] = el}>
        <div className="stat-item">
          <div className="stat-number">{projectsCompleted}</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{satisfactionRate}</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{automationHours}</div>
          <div className="stat-label">Hours Automated</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" ref={el => sectionRefs.current[2] = el}>
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            To democratize automation technology, making it accessible and valuable for businesses of all sizes. 
            We bridge the gap between technical potential and practical implementation, delivering solutions that 
            drive measurable results.
          </p>
          <div className="mission-points">
            <div className="point">
              <div className="point-icon">✓</div>
              <h3>Innovation</h3>
              <p>Pioneering new approaches to automation challenges</p>
            </div>
            <div className="point">
              <div className="point-icon">✓</div>
              <h3>Excellence</h3>
              <p>Reliable solutions with meticulous attention to detail</p>
            </div>
            <div className="point">
              <div className="point-icon">✓</div>
              <h3>Empowerment</h3>
              <p>Equipping clients with knowledge and tools for success</p>
            </div>
          </div>
        </div>
        <div className="mission-image">
          <img src={Robot} alt="Our mission" loading="lazy" />
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section" ref={el => sectionRefs.current[3] = el}>
        <div className="section-header">
          <h2>Automation Education</h2>
          <p>Comprehensive training programs to build automation expertise</p>
        </div>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-header">
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
              </div>
              <p>{course.description}</p>
              <Link to={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="course-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section" ref={el => sectionRefs.current[4] = el}>
        <div className="section-header">
          <h2>Our Technical Capabilities</h2>
          <p>The tools and technologies we master to deliver exceptional results</p>
        </div>
        <div className="capabilities-list">
          <div className="capability">
            <div className="capability-icon">RPA</div>
            <h3>Robotic Process Automation</h3>
            <p>UiPath, Automation Anywhere, Blue Prism, Power Automate</p>
          </div>
          <div className="capability">
            <div className="capability-icon">AI</div>
            <h3>Artificial Intelligence</h3>
            <p>Document understanding, machine learning, cognitive automation</p>
          </div>
          <div className="capability">
            <div className="capability-icon">API</div>
            <h3>System Integration</h3>
            <p>REST APIs, database connectors, legacy system automation</p>
          </div>
          <div className="capability">
            <div className="capability-icon">BPM</div>
            <h3>Process Optimization</h3>
            <p>Process mining, workflow analysis, performance benchmarking</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" ref={el => sectionRefs.current[5] = el}>
        <h2>Ready to Automate Your Future?</h2>
        <p>Whether you need automation solutions or want to build expertise, we have the perfect offering for you.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Get Started</Link>
          <Link to="/courses" className="btn-outline">Browse Courses</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;