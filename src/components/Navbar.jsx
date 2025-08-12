import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../components/styles/Navbar.css';
import RPAForm from './RPAForm';
import Mainlogo from '../assets/Logomain3.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleBookAppointment = () => {
    closeMenu();
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  // Scroll to section if hash exists in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleInPageNavigation = (hash, e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      // If we're already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home first
      window.location.href = `/${hash}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={Mainlogo} alt="SmartFlows Logo" className="logo-image" />
            </Link>
          </div>

          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            {/* About Dropdown */}
            <div
              className="dropdown-container"
              onMouseEnter={() => !isOpen && setOpenDropdown('about')}
              onMouseLeave={() => !isOpen && setOpenDropdown(null)}
            >
              <button
                className={`nav-link dropdown-toggle ${openDropdown === 'about' ? 'active' : ''}`}
                onClick={() => toggleDropdown('about')}
              >
                <span>About</span>
                <svg
                  className={`dropdown-icon ${openDropdown === 'about' ? 'open' : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'about' ? 'show' : ''}`}>
                <NavLink
                  to="/aboutuspage  "
                  onClick={closeMenu}
                  className="dropdown-item"
                >
                  About Us
                </NavLink>
                <a
                  href="#testimonials"
                  onClick={(e) => handleInPageNavigation('#testimonials', e)}
                  className="dropdown-item"
                >
                  Testimonials
                </a>
                <NavLink
                  to="/careerpage"
                  onClick={closeMenu}
                  className="dropdown-item"
                >
                  Careers
                </NavLink>

              </div>
            </div>

            {/* Services Link */}
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>Services</span>
            </NavLink>

            {/* Resources Dropdown */}
            <div
              className="dropdown-container"
              onMouseEnter={() => !isOpen && setOpenDropdown('resources')}
              onMouseLeave={() => !isOpen && setOpenDropdown(null)}
            >
              <button
                className={`nav-link dropdown-toggle ${openDropdown === 'resources' ? 'active' : ''}`}
                onClick={() => toggleDropdown('resources')}
              >
                <span>Resources</span>
                <svg
                  className={`dropdown-icon ${openDropdown === 'resources' ? 'open' : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className={`dropdown-menu ${openDropdown === 'resources' ? 'show' : ''}`}>
                <NavLink
                  to="/courses"
                  onClick={closeMenu}
                  className="dropdown-item"
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/blogpage"
                  onClick={closeMenu}
                  className="dropdown-item"
                >
                  Blogs
                </NavLink>
              </div>
            </div>

            {/* Contact link in mobile menu */}
            <a
              href="#contact"
              onClick={(e) => handleInPageNavigation('#contact', e)}
              className="nav-link mobile-contact-link"
            >
              <span>Contact</span>
            </a>

            {/* This will be hidden on mobile */}
            <div className="contact-and-button">
              <div className="button-container">
                <button className="navbar-btn" onClick={handleBookAppointment}>
                  <span>Book a Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile button container */}
          <div className="ham-and-demo-formobile">
            <div className="mobile-button-container">
              <button className="navbar-btn" onClick={handleBookAppointment}>
                <span>Book Demo</span>
              </button>
            </div>
            <button
              className={`hamburger ${isOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      <RPAForm isOpen={showForm} onClose={closeForm} />
    </>
  );
}

export default Navbar;