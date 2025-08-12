import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../styles/ServicesPage.css';
import UipathLogo from '../../assets/UiPath-Logo.png';
import PowerAutomateLogo from '../../assets/power-automate-logo-removebg-preview.png';
import AgenticAiLogo from '../../assets/new-ai-logo.png';
import AutomationAnywher from '../../assets/Automation-Anywhere.png';
import BluePrism from '../../assets/Blue-Prism.png';
import FooterSection from '../Sections/FooterSection.jsx';
import RPAForm from '../RPAForm';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRPAForm, setShowRPAForm] = useState(false); // Added this state

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
      color: "rgb(5 146 235)",
      detailedDescription: "Our UiPath Enterprise Automation service provides comprehensive robotic process automation solutions tailored to your business needs. We implement attended and unattended bots that integrate seamlessly with your existing systems, reducing manual work by up to 80%. Our certified UiPath developers follow best practices to deliver scalable automation solutions with measurable ROI."
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
      color: "#0082d4",
      detailedDescription: "Leverage the power of Microsoft's low-code platform to create custom business applications and automated workflows without extensive coding. Our Power Platform experts help you digitize paper-based processes, connect disparate systems, and empower your employees with self-service tools. We specialize in complex enterprise implementations with robust security and governance."
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
      color: "#006ad4",
      detailedDescription: "Our Intelligent AI Agents go beyond traditional automation by incorporating machine learning and natural language processing. These agents can handle unstructured data, make context-aware decisions, and improve over time. We implement solutions ranging from customer service chatbots to complex decision-support systems that augment human capabilities."
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
      color: "#0052d4",
      detailedDescription: "Automation Anywhere offers powerful RPA capabilities combined with cognitive automation features. We help enterprises implement scalable digital workforces that handle rule-based tasks with 100% accuracy. Our solutions include intelligent document processing, ERP automation, and legacy system integration, all managed through a centralized control room."
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
      color: "#003ad4",
      detailedDescription: "Blue Prism's enterprise RPA platform is ideal for organizations with strict security and compliance requirements. We design resilient automation solutions that integrate with your existing IT infrastructure while maintaining audit trails and meeting regulatory standards. Our Blue Prism implementations focus on long-term scalability and maintainability."
    }
  ];

  const testimonials = [
    {
      title: "Why Choose Our Automation Services?",
      description: "With over a decade of experience in enterprise automation, we bring deep technical expertise combined with industry-specific knowledge. Our certified automation developers deliver solutions that are scalable, secure, and tailored to your unique business requirements."
    },
    {
      title: "Proven Methodology",
      description: "We follow a structured automation lifecycle approach from process discovery to bot development and maintenance. Our proven framework ensures successful implementation with measurable ROI, typically achieving payback within 6-12 months."
    },
    {
      title: "Technology Agnostic Approach",
      description: "We recommend the best automation tools for your specific needs rather than pushing a single platform. Our consultants are certified across all major RPA and AI platforms to provide unbiased recommendations."
    },
    {
      title: "Center of Excellence Services",
      description: "We help establish Automation Centers of Excellence to ensure long-term success. Our COE services include governance framework design, competency development, and ROI tracking to maximize your automation investment."
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openRPAForm = () => {
    setShowRPAForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeRPAForm = () => {
    setShowRPAForm(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="servicespage">
      {/* Hero Section with Animated Waves */}
      <section className="servicespage-hero">
        <div className="servicespage-hero-content">
          <h1 className='Allh1 headings'>Intelligent Automation Services</h1>
          <p className="servicespage-hero-subtitle AllP headingpara">We design, build, and optimize automation solutions that transform businesses</p>
          <div className="servicespage-hero-cta">
            <button onClick={openRPAForm} className="servicespage-cta-button">Get Custom Solution</button>
          </div>
        </div>
        <div className="servicespage-wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#00bcd4"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#00bcd4"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#00bcd4"></path>
          </svg>
        </div>
      </section>

      {/* Services Showcase - Diagonal Layout */}
      <section className="servicespage-showcase">
        <div className="servicespage-showcase-header">
          <h2 className='Allh1 headings'>Our Automation Expertise</h2>
          <p className="AllP headingpara">Tailored solutions for every industry vertical</p>
        </div>
        
        <div className="servicespage-diagonal">
          {services.map((service, index) => (
            <div 
              className="servicespage-service-block" 
              key={index}
              style={{ 
                backgroundColor: service.color,
                transform: index % 2 === 0 ? 'skewY(-3deg)' : 'skewY(3deg)'
              }}
            >
              <div className="servicespage-service-content" style={{ transform: index % 2 === 0 ? 'skewY(3deg)' : 'skewY(-3deg)' }}>
                <div className="servicespage-service-logo-wrapper">
                  <img src={service.logo} alt={service.title} className="servicespage-service-logo" />
                </div>
                <h3 className='Allh1 headings'>{service.title}</h3>
                <p className="servicespage-service-desc AllP headingpara">{service.description}</p>
                <ul className="servicespage-service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button onClick={() => openModal(service)} className="servicespage-service-link">Explore Solution</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline - Updated to Horizontal */}
      <section className="servicespage-timeline">
        <h2>Our Automation Journey</h2>
        <p>From discovery to continuous improvement</p>
        
        <div className="servicespage-horizontal-timeline">
          <div className="servicespage-timeline-path">
            <div className="servicespage-timeline-progress"></div>
          </div>
          <div className="servicespage-timeline-items">
            <div className="servicespage-timeline-item">
              <div className="servicespage-timeline-marker">
                <div className="servicespage-marker-dot"></div>
              </div>
              <div className="servicespage-timeline-content">
                <h3>Discovery</h3>
                <p>Process mining and automation potential analysis</p>
              </div>
            </div>
            <div className="servicespage-timeline-item">
              <div className="servicespage-timeline-marker">
                <div className="servicespage-marker-dot"></div>
              </div>
              <div className="servicespage-timeline-content">
                <h3>Design</h3>
                <p>Architecture planning and automation blueprint</p>
              </div>
            </div>
            <div className="servicespage-timeline-item">
              <div className="servicespage-timeline-marker">
                <div className="servicespage-marker-dot"></div>
              </div>
              <div className="servicespage-timeline-content">
                <h3>Development</h3>
                <p>Agile bot development with continuous testing</p>
              </div>
            </div>
            <div className="servicespage-timeline-item">
              <div className="servicespage-timeline-marker">
                <div className="servicespage-marker-dot"></div>
              </div>
              <div className="servicespage-timeline-content">
                <h3>Deployment</h3>
                <p>Phased rollout with change management</p>
              </div>
            </div>
            <div className="servicespage-timeline-item">
              <div className="servicespage-timeline-marker">
                <div className="servicespage-marker-dot"></div>
              </div>
              <div className="servicespage-timeline-content">
                <h3>Optimization</h3>
                <p>Ongoing enhancement and scaling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="servicespage-stats">
        <div className="servicespage-stats-container">
          <div className="servicespage-stat-item">
            <div className="servicespage-stat-value">200+</div>
            <div className="servicespage-stat-label">Processes Automated</div>
          </div>
          <div className="servicespage-stat-item">
            <div className="servicespage-stat-value">85%</div>
            <div className="servicespage-stat-label">Average Efficiency Gain</div>
          </div>
          <div className="servicespage-stat-item">
            <div className="servicespage-stat-value">99.7%</div>
            <div className="servicespage-stat-label">Process Accuracy</div>
          </div>
          <div className="servicespage-stat-item">
            <div className="servicespage-stat-value">50+</div>
            <div className="servicespage-stat-label">Enterprise Clients</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="servicespage-cta">
        <div className="servicespage-cta-container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Our automation experts will conduct a free assessment of your processes</p>
          <button onClick={openRPAForm} className="servicespage-cta-button">Schedule Assessment</button>
        </div>
      </section>
      
      <FooterSection />

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className="servicespage-modal">
          <div className="servicespage-modal-overlay" onClick={closeModal}></div>
          <div className="servicespage-modal-content" style={{ borderTop: `5px solid ${selectedService.color}` }}>
            <button className="servicespage-modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className="servicespage-modal-header">
              <img src={selectedService.logo} alt={selectedService.title} className="servicespage-modal-logo" />
              <h2>{selectedService.title}</h2>
            </div>
            <div className="servicespage-modal-body">
              <p className="servicespage-modal-description">{selectedService.detailedDescription}</p>
              <div className="servicespage-modal-features">
                <h3>Key Features:</h3>
                <ul>
                  {selectedService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="servicespage-modal-cta">
                <button onClick={openRPAForm} className="servicespage-modal-button">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RPA Form Modal */}
      <RPAForm isOpen={showRPAForm} onClose={closeRPAForm} />
    </div>
  );
};

export default ServicesPage;