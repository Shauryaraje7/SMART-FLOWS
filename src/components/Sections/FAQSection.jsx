import React, { useState, useEffect, useRef } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import '../styles/FAQ.css';
import '../styles/Global.css';


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the business benefits of RPA?",
      answer: "RPA streamlines operations and generates significant time and cost savings by automating high-volume, mundane tasks. It reduces human error, increases accuracy, and boosts throughput and consistency since robots work 24/7. RPA also enhances organizational flexibility, improves responsiveness to change, and increases employee satisfaction by eliminating repetitive tasks. In practice, RPA can dramatically cut processing time (e.g., faster invoice or customer request handling), reassign human workers to higher-value activities, and deliver quick ROI."
    },
    {
      question: "How do I choose the right RPA tool for my organization?",
      answer: "Selecting an RPA platform depends on your specific needs and environment. Key factors include ease of implementation and integration with existing systems (legacy apps, databases, etc.), user-friendliness for developers and business users, scalability, security and compliance features, AI/cognitive capabilities (if needed), and total cost of ownership (licensing, support). Evaluate tools based on functionality (attended vs. unattended bots, UI vs. API automation), technical requirements (platform compatibility), vendor support, and team productivity."
    },
    {
      question: "How long does it take to implement an RPA solution?",
      answer: "Implementation time varies by complexity. Simple processes (well-defined, stable rules) can often be automated in a few weeks, whereas larger or more complex processes may take several months. Factors such as clear process definition, available documentation, and subject-matter expertise affect speed. Proper planning and a phased rollout (starting with a pilot) help ensure smooth implementation and quicker ROI."
    },
    {
      question: "Do you offer certifications?",
      answer: "Smartflows provides course-completion certificates for its training programs. Official vendor certifications are issued by RPA tool providers themselves (e.g., UiPath Certified Professional, Blue Prism Developer, Automation Anywhere Certified Advanced RPA Professional, or Microsoft Power Automate RPA Developer Associate). Our training prepares learners for these industry certifications, though proctored exams must be taken through the vendor's platform."
    },
    {
      question: "What technologies do you work with?",
      answer: "We leverage cutting-edge technologies, including React, Node.js, Python, TensorFlow/PyTorch, and cloud platforms like AWS & Azure. Our stack integrates Agentic AI frameworks, multimodal LLMs (GPT-4, Claude, Gemini), and autonomous workflow automation for intelligent decision-making. We also specialize in RPA (UiPath, Blue Prism, Power Automate), real-time data pipelines, and MLOps for scalable AI deployment. Continuously updated to industry benchmarks, we ensure future-ready solutions."
    },
  ];

  return (
    <section 
      className={`faq-section ${isVisible ? 'visible' : ''}`} 
      id="faq"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header-FAQ">
          <h2 className="section-title-FAQ Allh1 headings ">Frequently Asked <span>Questions</span></h2>
          <p className="section-subtitle-FAQ AllP headingpara ">Find answers to common queries about our services and processes</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question Allh1 ">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              <div className="faq-answer AllP ">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;