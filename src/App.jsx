import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './components/Sections/courses.jsx';
import './App.css';

// Import all sections directly
import ServicesPage from './components/Pages/servicepage.jsx';
import Hero from './components/Sections/Hero.jsx';
import ServicesSection from './components/Sections/ServicesSection.jsx';
import AboutSection from './components/Sections/AboutSection.jsx';
import WhyChooseUsSection from './components/Sections/WhyChooseUsSection.jsx';
import ClientsSection from './components/Sections/ClientsSection.jsx';
import TestimonialsSection from './components/Sections/Testimonials.jsx';
import FAQSection from './components/Sections/FAQSection.jsx';
import ContactSection from './components/Sections/ContactSection.jsx';
import FooterSection from './components/Sections/FooterSection.jsx';

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
            <Route path="/services" element={<ServicesPage />} />
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