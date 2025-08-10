import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesPage.css';
import UipathLogo from '../../assets/UiPath-Logo.png';
import PowerAutomateLogo from '../../assets/power-automate-logo-removebg-preview.png';
import AgenticAiLogo from '../../assets/new-ai-logo.png';
import AutomationAnywher from '../../assets/Automation-Anywhere.png';
import BluePrism from '../../assets/Blue-Prism.png';

const ServicesPage = () => {
  const services = [
    {
      title: "UiPath Enterprise Automation",
      logo: UipathLogo,
      description: "End-to-end automation solutions with the industry-leading UiPath platform",
      features: [
        "Process assessment and discovery",
        "Attended and unattended robots",
        "AI-powered document processing",
        "Test automation suite",
        "Center of Excellence setup"
      ],
      color: "#00bcd4"
    },
    {
      title: "Microsoft Power Platform",
      logo: PowerAutomateLogo,
      description: "Transform business processes with Microsoft's low-code automation suite",
      features: [
        "Power Automate workflows",
        "AI Builder integration",
        "Power Apps development",
        "Dataverse integration",
        "Process advisor analytics"
      ],
      color: "#0082d4"
    },
    {
      title: "Intelligent AI Agents",
      logo: AgenticAiLogo,
      description: "Next-generation autonomous systems that learn and adapt",
      features: [
        "Custom AI agent development",
        "LLM orchestration",
        "Cognitive automation",
        "Continuous learning models",
        "Human-in-the-loop systems"
      ],
      color: "#006ad4"
    },
    {
      title: "Automation Anywhere",
      logo: AutomationAnywher,
      description: "Enterprise-grade RPA with cognitive capabilities",
      features: [
        "IQ Bot implementation",
        "Bot lifecycle management",
        "Process discovery",
        "Analytics and insights",
        "Cloud-native automation"
      ],
      color: "#0052d4"
    },
    {
      title: "Blue Prism Solutions",
      logo: BluePrism,
      description: "Secure, scalable digital workers for complex environments",
      features: [
        "Digital workforce design",
        "Object studio development",
        "Control room management",
        "Interoperability services",
        "Compliance automation"
      ],
      color: "#003ad4"
    }
  ];

  return (
    <div className="services-page-alt">
      {/* Hero Section with Animated Waves */}
      <section className="services-hero-alt">
        <div className="hero-content-alt">
          <h1>Intelligent Automation Services</h1>
          <p className="hero-subtitle-alt">We design, build, and optimize automation solutions that transform businesses</p>
          <div className="hero-cta-alt">
            <Link to="/contact" className="cta-button-alt">Get Custom Solution</Link>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#00bcd4"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#00bcd4"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#00bcd4"></path>
          </svg>
        </div>
      </section>

      {/* Services Showcase - Diagonal Layout */}
      <section className="services-showcase">
        <div className="showcase-header">
          <h2>Our Automation Expertise</h2>
          <p>Tailored solutions for every industry vertical</p>
        </div>
        
        <div className="services-diagonal">
          {services.map((service, index) => (
            <div 
              className="service-block" 
              key={index}
              style={{ 
                backgroundColor: service.color,
                transform: index % 2 === 0 ? 'skewY(-3deg)' : 'skewY(3deg)'
              }}
            >
              <div className="service-content" style={{ transform: index % 2 === 0 ? 'skewY(3deg)' : 'skewY(-3deg)' }}>
                <div className="service-logo-wrapper">
                  <img src={service.logo} alt={service.title} className="service-logo" />
                </div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link to="#" className="service-link">Explore Solution</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="process-timeline">
        <h2>Our Automation Journey</h2>
        <p>From discovery to continuous improvement</p>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Discovery & Assessment</h3>
              <p>Comprehensive process mining and automation potential analysis</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Solution Design</h3>
              <p>Architecture planning and automation blueprint creation</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Development</h3>
              <p>Agile bot development with continuous testing</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Deployment</h3>
              <p>Phased rollout with change management</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Optimization</h3>
              <p>Ongoing enhancement and scaling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-value">200+</div>
            <div className="stat-label">Processes Automated</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">85%</div>
            <div className="stat-label">Average Efficiency Gain</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">99.7%</div>
            <div className="stat-label">Process Accuracy</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">50+</div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-alt">
        <div className="cta-container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Our automation experts will conduct a free assessment of your processes</p>
          <Link to="/contact" className="cta-button-alt">Schedule Assessment</Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;