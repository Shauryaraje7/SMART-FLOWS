import React, { useEffect, useRef } from 'react';
import '../styles/WhyChooseUsSection.css';
import '../styles/Global.css';

const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          
          if (entry.target.classList.contains('choose-card')) {
            const delay = entry.target.getAttribute('data-delay');
            entry.target.style.transitionDelay = `${delay}ms`;
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToObserve = [
      sectionRef.current, 
      titleRef.current, 
      subtitleRef.current
    ].filter(Boolean);
    
    elementsToObserve.forEach(el => appearOnScroll.observe(el));

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.setAttribute('data-delay', index * 100);
        appearOnScroll.observe(card);
      }
    });

    return () => {
      appearOnScroll.disconnect();
    };
  }, []);

  return (
    <section 
      className="choose-us-section" 
      ref={sectionRef}
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="choose-us-container">
        <div className="section-header-Chooseus">
          <h2 
            className="section-title-Chooseus Allh1 headings" 
            ref={titleRef}
            id="why-choose-us-heading"
          >
            Why <span>Choose Us</span>
          </h2>
          <p className="section-subtitle-Chooseus AllP headingpara" ref={subtitleRef}>
            We're not just developers — we're your digital partners. Here's why brands trust SmartFlows.
          </p>
        </div>

        <div className="choose-us-grid">
          {[
            {
              icon: "🤖",
              title: "RPA Expertise",
              description: "Certified professionals with 5+ years of experience in UiPath, Automation Anywhere, and Blue Prism implementations."
            },
            {
              icon: "⚡",
              title: "Rapid ROI",
              description: "Proven frameworks deliver automation solutions in weeks, with typical payback periods under 6 months."
            },
            {
              icon: "🔗",
              title: "Seamless Integration",
              description: "Specialists in connecting RPA with your existing ERP, CRM, and legacy systems without disruption."
            },
            {
              icon: "🛡️",
              title: "Enterprise-Grade Security",
              description: "SOC 2 compliant solutions with role-based access controls and audit trails for regulated industries."
            },
            {
              icon: "📊",
              title: "Process Intelligence",
              description: "AI-powered process mining to identify automation opportunities and measure bot performance in real-time."
            },
            {
              icon: "🔄",
              title: "Scalable Operations",
              description: "Bot orchestration across departments with self-healing workflows and exception handling for 24/7 reliability."
            }
          ].map((card, index) => (
            <article 
              className="choose-card" 
              key={index}
              ref={el => cardsRef.current[index] = el}
              aria-labelledby={`card-title-${index}`}
            >
              <div className="card-badge" aria-hidden="true">{card.badge}</div>
              <div className="icon-wrapper">
                <div className="choose-icon" aria-hidden="true">{card.icon}</div>
              </div>
              <h3 id={`card-title-${index}`} className="Allh1 smallheading ">{card.title}</h3>
              <p className="AllP smallpara ">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyChooseUsSection);