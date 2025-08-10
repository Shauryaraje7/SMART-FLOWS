import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './components/pages/courses.jsx';
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
    <div className="appcontainer">
      <Hero />
      <AboutSection/>
      <ServicesSection />
     
      <WhyChooseUsSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
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
            {/* Add a catch-all route for 404 pages */}
            <Route path="*" element={
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;