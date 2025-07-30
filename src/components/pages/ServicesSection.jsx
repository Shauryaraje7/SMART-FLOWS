import React, { useEffect, useRef } from 'react';
import { FaCogs, FaUsers, FaLaptopCode } from 'react-icons/fa';
import '../styles/ServicesSection.css';
import '../styles/Global.css';
import  UipathLogo from '../../assets/UiPath-Logo.png';
import PowerAutomateLogo from '../../assets/power-automate-logo-removebg-preview.png';
import AgenticAiLogo from '../../assets/AgenticAiLogo.png'
import AutomationAnywher from '../../assets/Automation-Anywhere.png';
import BluePrism from '../../assets/Blue-Prism.png'




const ServicesSection = () => {
  const sectionRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe section
    if (sectionRef.current) {
      appearOnScroll.observe(sectionRef.current);
    }

    // Observe header elements
    [headerRef.current, subtitleRef.current].forEach(el => {
      if (el) appearOnScroll.observe(el);
    });

    // Observe cards
    serviceCardsRef.current.forEach(card => {
      if (card) appearOnScroll.observe(card);
    });

    return () => {
      appearOnScroll.disconnect();
    };
  }, []);

  return (
    <div className="services-section  " id="services" ref={sectionRef}>
      <div className="section-header Allh1 ">
        <h2 ref={headerRef}>What We Offer</h2>
        <p className="section-subtitle AllP headingpara " ref={subtitleRef}>Tailored solutions for your success</p>
      </div>
      <div className="services-grid">
        {[
          {
            icon: <img src={UipathLogo} alt="UiPath Logo" className="service-icon" />,
            title: "UiPath Automation",
            description: "End-to-end automation solutions with the industry-leading UiPath platform, featuring AI agents and Power Apps integration."
          },
          {
            icon: <img src={PowerAutomateLogo} alt="Power Automate Logo" className="service-icon" />,
            title: "Power Automate",
            description: "Microsoft's powerful automation tools to streamline your workflows."
          },
          {
            icon: <FaLaptopCode className="icon" />,
            title: "Process Consulting",
            description: "Identify and optimize processes ready for automation."
          },
          {
            icon: <img src={AutomationAnywher} alt=""  className="service-icon AutomationAnywher-Logo "   />,
            title: "Automation Anywhere",
            description: "Intelligent automation solutions  for complex business processes.Intelligent automation solutions "
          },
          {
            icon: <img src={BluePrism} alt=""  className="service-icon agenticailogo "   />,
            title: "Blue Prism",
            description: "Enterprise-grade RPA with digital workforce capabilities."
          },
          {
            icon: <img src={AgenticAiLogo} alt=""  className="service-icon agenticailogo "   />,
            title: "Custom Automation Apps",
            description: "Tailored automation applications for your specific business needs."
          }
        ].map((service, index) => (
          <div 
            className="service-card" 
            key={index}
            ref={el => serviceCardsRef.current[index] = el}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <h3 className='Allh1'   >{service.title}</h3>
            <p  className='AllP'  >{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;