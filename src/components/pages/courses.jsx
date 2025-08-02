import React, { useState } from 'react';
import '../styles/courses.css';
import '../styles/Global.css';



const Courses = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
      
      await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email, type: 'course_notification' }),
        mode: 'no-cors'
      });

      setSubscriptionStatus('success');
      setEmail('');
      setShowPopup(false);
      
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
    <section className="courses-section">
      <div className="courses-container">
        <div className="section-header">
          <h2>Our Courses</h2>
          <p className="section-subtitle">Expand your knowledge with our comprehensive learning paths</p>
        </div>

        <div className="coming-soon-container">
          <div className="coming-soon-content">
            <div className="icon-wrapper">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className='Allh1' >Exciting Courses Coming Soon!</h3>
            <p className='AllP'  >We're currently working on creating the best learning experience for you. Stay tuned for our upcoming courses that will help you grow your skills.</p>
            <button 
              className="notify-btn" 
              onClick={() => setShowPopup(true)}
            >
              Notify Me When Available
            </button>
          </div>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="courses-popup-overlay">
            <div className="courses-popup">
              <button 
                className="close-popup"
                onClick={() => {
                  setShowPopup(false);
                  setSubscriptionStatus(null);
                }}
              >
                &times;
              </button>
              <h3>Get Notified When Courses Launch</h3>
              <form className="courses-subscribe-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscriptionStatus === 'invalid') setSubscriptionStatus(null);
                  }}
                  placeholder="Enter your email"
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
                  Thank you! We'll notify you when courses are available.
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
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;