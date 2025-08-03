import React, { useEffect, useRef } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import '../styles/ServicesSection.css';
import UipathLogo from '../../assets/UiPath-Logo.png';
import PowerAutomateLogo from '../../assets/power-automate-logo-removebg-preview.png';
import AgenticAiLogo from '../../assets/AgenticAiLogo.png';
import AutomationAnywher from '../../assets/Automation-Anywhere.png';
import BluePrism from '../../assets/Blue-Prism.png';

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

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) appearOnScroll.observe(sectionRef.current);
    if (headerRef.current) appearOnScroll.observe(headerRef.current);
    if (subtitleRef.current) appearOnScroll.observe(subtitleRef.current);

    serviceCardsRef.current.forEach(card => {
      if (card) appearOnScroll.observe(card);
    });

    return () => appearOnScroll.disconnect();
  }, []);

  return (
    <section className="services-section" id="services" ref={sectionRef} aria-labelledby="services-heading">
      <div className="section-header">
        <h2 id="services-heading" className='Allh1'  ref={headerRef}>What We Offer</h2>
        <p className="section-subtitle" ref={subtitleRef}>Tailored solutions for your success</p>
      </div>
      <div className="services-grid">
        {[
          {
            icon: <img src={UipathLogo} alt="UiPath Automation" className="service-icon" width="40" height="40" loading="lazy" />,
            title: "UiPath Automation",
            description: "End-to-end automation solutions with the industry-leading UiPath platform, featuring AI agents and Power Apps integration."
          },
          {
            icon: <img src={PowerAutomateLogo} alt="Power Automate" className="service-icon" width="40" height="40" loading="lazy" />,
            title: "Power Automate",
            description: "Microsoft's powerful automation tools to streamline your workflows."
          },
          {
            icon: <FaLaptopCode className="service-icon" aria-hidden="true" focusable="false" />,
            title: "Process Consulting",
            description: "Identify and optimize processes ready for automation."
          },
          {
            icon: <img src={AutomationAnywher} alt="Automation Anywhere" className="service-icon AutomationAnywher-Logo" width="40" height="40" loading="lazy" />,
            title: "Automation Anywhere",
            description: "Intelligent automation solutions for complex business processes."
          },
          {
            icon: <img src={BluePrism} alt="Blue Prism" className="service-icon agenticailogo" width="40" height="40" loading="lazy" />,
            title: "Blue Prism",
            description: "Enterprise-grade RPA with digital workforce capabilities."
          },
          {
            icon: <img src={AgenticAiLogo} alt="Custom Automation Apps" className="service-icon agenticailogo" width="40" height="40" loading="lazy" />,
            title: "Custom Automation Apps",
            description: "Tailored automation applications for your specific business needs."
          }
        ].map((service, index) => (
          <article 
            className="service-card" 
            key={index}
            ref={el => serviceCardsRef.current[index] = el}
            style={{ transitionDelay: `${index * 100}ms` }}
            aria-labelledby={`service-title-${index}`}
          >
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <h3  className='Allh1'  id={`service-title-${index}`}>{service.title}</h3>
            <p  className='AllP'  >{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ServicesSection);