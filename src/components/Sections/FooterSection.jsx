import React, { useState } from 'react';
import '../styles/FooterSection.css';
import giticon from '../../assets/github.svg';
import twittericon from '../../assets/twitter.svg';
import linkedinicon from '../../assets/linkedin.svg';
import instaicon from '../../assets/instagram.svg';
import gmailicon from '../../assets/gmail.svg';
import Mainlogo from '../../assets/logo-for-footer.png';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscriptionStatus('invalid');
      return;
    }

    setIsLoading(true);
    setSubscriptionStatus(null);

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbynjJ0uCg6ElVYtRiamLB2-bN04aa5PojtWlrTbrr2d6f4VHnsW9mcac5QpXIi68jfk/exec';
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email }),
        mode: 'no-cors'
      });

      setSubscriptionStatus('success');
      setEmail('');
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubscriptionStatus(null), 5000);
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscriptionStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-links">
            <div className="links-column quicklinks-coloumn-footer ">
              <h4 className="links-heading">Quick Links</h4>
              <ul className="links-list">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="links-column serveice-coloumn-footer">
              <h4 className="links-heading  ">Services</h4>
              <ul className="links-list">
                <li><a href="/services/automation">Process Automation</a></li>
                <li><a href="/services/ai">AI Solutions</a></li>
                <li><a href="/services/consulting">Consulting</a></li>
                <li><a href="/services/training">Training</a></li>
                <li><a href="/services/support">Support</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4 className="links-heading">Company</h4>
              <ul className="links-list">
                <li><a href="/about">About Us</a></li>
                <li><a href="/team">Our Team</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-brand">
              <div className="logo-container">
                <img src={Mainlogo} alt="SmartFlows Logo" className="brand-logo" />
                <h2 className="logo-text">SmartFlows</h2>
              </div>
              <p className="tagline">Intelligent Automation & AI Solutions</p>
            </div>

            <div className="footer-actions">
              <div className="newsletter">
                <h4>Stay updated</h4>
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (subscriptionStatus === 'invalid') setSubscriptionStatus(null);
                    }}
                    placeholder="Your email" 
                    required 
                  />
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <span className="loading-spinner"></span>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </form>
                
                {subscriptionStatus === 'success' && (
                  <p className="subscription-message success">
                    Thank you for subscribing!
                  </p>
                )}
                {subscriptionStatus === 'error' && (
                  <p className="subscription-message error">
                    Subscription failed. Please try again.
                  </p>
                )}
                {subscriptionStatus === 'invalid' && (
                  <p className="subscription-message error">
                    Please enter a valid email address
                  </p>
                )}
              </div>

            

              <div className="social-links">
                <a href="https://GitHub.com/smartflows-in" aria-label="GitHub" className="social-link">
                  <img src={giticon} alt="GitHub" width="20" height="20" />
                </a>
                <a href="https://x.com/smartflows_in" aria-label="Twitter" className="social-link">
                  <img src={twittericon} alt="Twitter" width="20" height="20" />
                </a>
                <a href="https://www.linkedin.com/company/smartflows-in/" aria-label="LinkedIn" className="social-link">
                  <img src={linkedinicon} alt="LinkedIn" width="20" height="20" />
                </a>
                <a href="https://instagram.com/Smartflows.in" aria-label="Instagram" className="social-link">
                  <img src={instaicon} alt="Instagram" width="20" height="20" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <a href="/privacy">Privacy</a>
            <span>•</span>
            <a href="/terms">Terms</a>
            <span>•</span>
            <a href="/cookies">Cookies</a>
            <span>•</span>
            <a href="/sitemap">Sitemap</a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} SmartFlows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;