import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './components/pages/courses.jsx';
// import './components/styles/Home.css'
import './App.css';

// Import all sections directly
import Hero from './components/pages/Hero.jsx';

import ServicesSection from './components/pages/ServicesSection.jsx';
import AboutSection from './components/pages/AboutSection.jsx';
import WhyChooseUsSection from './components/pages/WhyChooseUsSection.jsx';
import ClientsSection from './components/pages/ClientsSection.jsx';
import TestimonialsSection from './components/pages/Testimonials.jsx';
import FAQSection from './components/pages/FAQSection.jsx';
import ContactSection from './components/pages/ContactSection.jsx';
import FooterSection from './components/pages/FooterSection.jsx';

function HomeContent() {
  return (
    <><div className="appcontainer">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;