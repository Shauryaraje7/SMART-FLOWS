import React, { useState } from 'react';
import '../styles/courses.css';

const CoursePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    terms: false
  });

  const courses = [
    { 
      id: 1,
      name: 'UiPath Automation',
      levels: {
        Beginner: {
          description: 'Get started with UiPath Studio and learn basic automation concepts.',
          detailedDescription: 'This beginner course introduces you to UiPath Studio interface, basic activities, and simple automation workflows. Perfect for those new to RPA.',
          duration: '4 weeks',
          syllabus: ['Introduction to RPA', 'UiPath Studio Basics', 'Recording Actions', 'Simple Data Entry Automation'],
          projects: ['Web Form Automation', 'Excel Data Processing'],
          prerequisites: 'Basic computer skills',
          certification: 'UiPath Certified Associate'
        },
        Intermediate: {
          description: 'Build complex workflows and handle exceptions in UiPath.',
          detailedDescription: 'Learn to create robust automations with error handling, reusable components, and data manipulation techniques.',
          duration: '6 weeks',
          syllabus: ['Control Flow', 'Error Handling', 'Data Manipulation', 'Selector Strategies'],
          projects: ['Invoice Processing', 'CRM Data Migration'],
          prerequisites: 'UiPath Beginner course or equivalent knowledge',
          certification: 'UiPath Certified Professional'
        },
        Advanced: {
          description: 'Master advanced UiPath features and enterprise deployment.',
          detailedDescription: 'Dive into advanced topics like REFramework, queue management, and Citrix automation for enterprise solutions.',
          duration: '8 weeks',
          syllabus: ['REFramework', 'Orchestrator', 'Citrix Automation', 'Performance Optimization'],
          projects: ['End-to-End ERP Automation', 'Legacy System Integration'],
          prerequisites: 'UiPath Intermediate course or equivalent knowledge',
          certification: 'UiPath Certified Advanced Developer'
        }
      },
      instructor: 'Sarah Johnson',
      instructorBio: 'RPA expert with 10+ years of experience in automation. Former UiPath solutions architect.',
      rating: 4.8,
      students: 1250,
      reviews: [
        { name: 'Alex M.', rating: 5, comment: 'Changed my career completely!' },
        { name: 'Priya K.', rating: 4, comment: 'Excellent content and instructor support' }
      ]
    },
    { 
      id: 2,
      name: 'Power Apps',
      levels: {
        Beginner: {
          description: 'Create your first canvas apps with no-code solutions.',
          detailedDescription: 'Learn the fundamentals of Power Apps canvas apps and build simple business applications without coding.',
          duration: '3 weeks',
          syllabus: ['Canvas App Basics', 'Controls and Layouts', 'Simple Formulas', 'Data Connections'],
          projects: ['Employee Directory', 'Inventory Tracker'],
          prerequisites: 'Basic understanding of business processes',
          certification: 'Microsoft Power Platform Fundamentals'
        },
        Intermediate: {
          description: 'Develop model-driven apps and complex business logic.',
          detailedDescription: 'Build model-driven apps with business rules, flows, and custom connectors for more sophisticated solutions.',
          duration: '5 weeks',
          syllabus: ['Model-Driven Apps', 'Business Rules', 'Power Automate Integration', 'Custom Connectors'],
          projects: ['Service Request System', 'Field Service App'],
          prerequisites: 'Power Apps Beginner course or equivalent knowledge',
          certification: 'Microsoft Power Platform App Maker'
        },
        Advanced: {
          description: 'Implement enterprise solutions with advanced Power Platform features.',
          detailedDescription: 'Master advanced techniques including component libraries, portals, and AI Builder integration.',
          duration: '7 weeks',
          syllabus: ['Component Libraries', 'Portals', 'AI Builder', 'Solution Architecture'],
          projects: ['Customer Portal', 'AI-Powered Inspection App'],
          prerequisites: 'Power Apps Intermediate course or equivalent knowledge',
          certification: 'Microsoft Power Platform Developer'
        }
      },
      instructor: 'Michael Chen',
      instructorBio: 'Microsoft MVP with 8 years of experience in Power Platform solutions.',
      rating: 4.6,
      students: 980,
      reviews: [
        { name: 'David L.', rating: 5, comment: 'Michael explains complex concepts very clearly' },
        { name: 'Sophia G.', rating: 4, comment: 'Great real-world examples' }
      ]
    },
    { 
      id: 3,
      name: 'Automation Anywhere',
      levels: {
        Beginner: {
          description: 'Learn basic bot development with Automation Anywhere.',
          detailedDescription: 'Introduction to task bot creation, recorder usage, and simple automation tasks.',
          duration: '4 weeks',
          syllabus: ['Task Bot Basics', 'Recorder Usage', 'Simple Automations', 'Basic Commands'],
          projects: ['Data Entry Bot', 'Report Generation'],
          prerequisites: 'Basic computer skills',
          certification: 'Automation Anywhere Certified Basic RPA Professional'
        },
        Intermediate: {
          description: 'Create metabots and handle complex automation scenarios.',
          detailedDescription: 'Develop reusable components and handle more complex automation scenarios with error handling.',
          duration: '6 weeks',
          syllabus: ['MetaBot Creation', 'Error Handling', 'Advanced Commands', 'Object Cloning'],
          projects: ['ERP Integration', 'Multi-System Workflow'],
          prerequisites: 'Automation Anywhere Beginner course or equivalent knowledge',
          certification: 'Automation Anywhere Certified Advanced RPA Professional'
        },
        Advanced: {
          description: 'Master IQ bots and enterprise deployment strategies.',
          detailedDescription: 'Implement cognitive automation with IQ bots and learn enterprise deployment best practices.',
          duration: '8 weeks',
          syllabus: ['IQ Bot Configuration', 'Control Room', 'Bot Deployment', 'Security Management'],
          projects: ['Document Processing System', 'End-to-End Business Process'],
          prerequisites: 'Automation Anywhere Intermediate course or equivalent knowledge',
          certification: 'Automation Anywhere Certified Master RPA Professional'
        }
      },
      instructor: 'David Wilson',
      instructorBio: 'RPA architect with expertise in Automation Anywhere and cognitive automation.',
      rating: 4.7,
      students: 870,
      reviews: [
        { name: 'Emma R.', rating: 5, comment: 'The projects were very practical' },
        { name: 'James P.', rating: 4, comment: 'Good pace and coverage of topics' }
      ]
    },
    { 
      id: 4,
      name: 'Blue Prism',
      levels: {
        Beginner: {
          description: 'Learn the fundamentals of Blue Prism development.',
          detailedDescription: 'Introduction to Process Studio, basic objects, and simple automation workflows in Blue Prism.',
          duration: '5 weeks',
          syllabus: ['Process Studio Basics', 'Object Studio', 'Simple Workflows', 'Data Items'],
          projects: ['Basic Data Migration', 'Simple Form Processing'],
          prerequisites: 'Basic understanding of business processes',
          certification: 'Blue Prism Certified Associate Developer'
        },
        Intermediate: {
          description: 'Build complex automations with exception handling.',
          detailedDescription: 'Develop robust automations with exception handling, collections, and queue management.',
          duration: '7 weeks',
          syllabus: ['Exception Handling', 'Collections', 'Work Queues', 'Surface Automation'],
          projects: ['Complex Data Processing', 'Multi-Step Workflow'],
          prerequisites: 'Blue Prism Beginner course or equivalent knowledge',
          certification: 'Blue Prism Certified Professional Developer'
        },
        Advanced: {
          description: 'Master Blue Prism enterprise architecture and solutions.',
          detailedDescription: 'Learn advanced topics including release management, control room, and solution design.',
          duration: '9 weeks',
          syllabus: ['Release Manager', 'Control Room', 'Solution Design', 'Performance Tuning'],
          projects: ['Enterprise Integration', 'Large-Scale Automation'],
          prerequisites: 'Blue Prism Intermediate course or equivalent knowledge',
          certification: 'Blue Prism Certified Solution Designer'
        }
      },
      instructor: 'Emma Rodriguez',
      instructorBio: 'Blue Prism expert with experience in large-scale enterprise automation.',
      rating: 4.9,
      students: 1100,
      reviews: [
        { name: 'Oliver T.', rating: 5, comment: 'Emma is an amazing instructor' },
        { name: 'Ava S.', rating: 5, comment: 'Best RPA course Ive taken' }
      ]
    },
    { 
      id: 5,
      name: 'Custom Automation Apps',
      levels: {
        Beginner: {
          description: 'Learn to combine basic automation tools for simple solutions.',
          detailedDescription: 'Introduction to combining different automation tools to create simple custom solutions.',
          duration: '5 weeks',
          syllabus: ['Tool Integration Basics', 'Simple API Usage', 'Basic Scripting', 'Data Transfer'],
          projects: ['Cross-Application Data Sync', 'Simple Notification System'],
          prerequisites: 'Basic programming knowledge helpful but not required',
          certification: 'Custom Automation Fundamentals Certificate'
        },
        Intermediate: {
          description: 'Develop integrated solutions with multiple technologies.',
          detailedDescription: 'Build more complex solutions by integrating RPA tools with APIs and databases.',
          duration: '8 weeks',
          syllabus: ['Advanced API Integration', 'Database Connectivity', 'Custom Components', 'Error Handling'],
          projects: ['Order Processing System', 'Data Validation Tool'],
          prerequisites: 'Custom Automation Beginner course or equivalent knowledge',
          certification: 'Custom Automation Professional Certificate'
        },
        Advanced: {
          description: 'Design and implement enterprise-grade custom automation solutions.',
          detailedDescription: 'Master the architecture and implementation of complex custom automation solutions for enterprises.',
          duration: '10 weeks',
          syllabus: ['Solution Architecture', 'Performance Optimization', 'Security Implementation', 'Maintenance Strategies'],
          projects: ['End-to-End Business Process', 'Legacy System Modernization'],
          prerequisites: 'Custom Automation Intermediate course or equivalent knowledge',
          certification: 'Custom Automation Expert Certificate'
        }
      },
      instructor: 'James Peterson',
      instructorBio: 'Automation architect specializing in custom enterprise solutions.',
      rating: 4.5,
      students: 750,
      reviews: [
        { name: 'Noah W.', rating: 4, comment: 'Lots of practical knowledge' },
        { name: 'Isabella M.', rating: 5, comment: 'Perfect for my needs' }
      ]
    }
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses
    .filter(course => 
      (course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.keys(course.levels).some(level => level.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (activeFilter === 'All' || activeFilter in course.levels)
    )
    .flatMap(course => 
      Object.entries(course.levels).map(([level, levelData]) => ({
        ...course,
        level: level,
        levelData: levelData,
        imageUrl: `https://source.unsplash.com/random/300x200/?${course.name.replace(/\s+/g, '')},${level},technology`,
        accentColor: `hsl(${Math.floor(Math.random() * 60) + 200}, 70%, 50%)`
      }))
    );

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowCourseModal(true);
  };

  const handleEnrollClick = () => {
    setShowCourseModal(false);
    setShowEnrollmentModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    alert(`Enrollment submitted successfully for ${selectedCourse.name}!\nWe'll contact you shortly at ${formData.email}`);
    setShowEnrollmentModal(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      goals: '',
      terms: false
    });
  };

  return (
    <div className="course-page">
      <div className="course-hero">
        <div className="hero-content">
          <h1>Transform Your Career with Automation</h1>
          <p>Master the tools that are shaping the future of business processes</p>
        </div>
      </div>

      <div className="course-container">
        <div className="course-header">
          <h2>Our Automation Courses</h2>
          <p className="subtitle">Browse our comprehensive curriculum designed for all skill levels</p>
          
          <div className="controls-container">
            <div className="search-filter-container">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button">
                  <i className="fas fa-search">Search</i>
                </button>
              </div>

              <div className="level-filters">
                {levels.map(level => (
                  <button
                    key={level}
                    className={`level-filter ${activeFilter === level ? 'active' : ''}`}
                    onClick={() => setActiveFilter(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="course-grid">
          {filteredCourses.map((course, index) => (
            <div 
              className="course-card"
              key={`${course.id}-${course.level}`}
              style={{ '--accent-color': course.accentColor }}
              onClick={() => handleCourseClick(course)}
            >
              <div className="course-image">
                <img src={course.imageUrl} alt={`${course.name} ${course.level}`} />
                <div className="course-badge">{course.level}</div>
              </div>
              <div className="course-info">
                <h3>{course.name}</h3>
                <div className="course-meta">
                  <span><i className="fas fa-clock"></i> {course.levelData.duration}</span>
                  <span><i className="fas fa-star"></i> {course.rating}</span>
                </div>
                <p className="course-description">{course.levelData.description}</p>
                
                <button 
                  className="enroll-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCourseClick(course);
                  }}
                >
                  View Details <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {showCourseModal && selectedCourse && (
        <div className="course-details-modal">
          <div className="modal-overlay" onClick={() => setShowCourseModal(false)}></div>
          <div className="modal-content">
            <button 
              className="close-modal" 
              onClick={() => setShowCourseModal(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <h3>{selectedCourse.name} - {selectedCourse.level}</h3>
              <div className="course-rating">
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < Math.floor(selectedCourse.rating) ? 'filled' : ''} ${i === Math.floor(selectedCourse.rating) && selectedCourse.rating % 1 >= 0.5 ? 'half-filled' : ''}`}
                    ></i>
                  ))}
                </span>
                <span>({selectedCourse.rating}/5 from {selectedCourse.students} students)</span>
              </div>
            </div>






            <div className="modal-body">
              <div className="course-overview">
                <div className="course-image-large">
                  <img src={selectedCourse.imageUrl} alt={selectedCourse.name} />
                </div>
                <div className="course-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-clock"></i>
                    <span><strong>Duration:</strong> {selectedCourse.levelData.duration}</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-tie"></i>
                    <span><strong>Instructor:</strong> {selectedCourse.instructor}</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-certificate"></i>
                    <span><strong>Certification:</strong> {selectedCourse.levelData.certification}</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-book"></i>
                    <span><strong>Prerequisites:</strong> {selectedCourse.levelData.prerequisites}</span>
                  </div>
                </div>
              </div>

              <div className="course-details-section">
                <h4>Course Description</h4>
                <p>{selectedCourse.levelData.detailedDescription}</p>
              </div>

              <div className="course-details-section">
                <h4>Syllabus</h4>
                <ul className="syllabus-list">
                  {selectedCourse.levelData.syllabus.map((item, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="course-details-section">
                <h4>Projects</h4>
                <div className="projects-grid">
                  {selectedCourse.levelData.projects.map((project, index) => (
                    <div key={index} className="project-card">
                      <i className="fas fa-project-diagram"></i>
                      <span>{project}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="course-details-section">
                <h4>About the Instructor</h4>
                <div className="instructor-info">
                  <div className="instructor-bio">
                    <p>{selectedCourse.instructorBio}</p>
                  </div>
                </div>
              </div>

              <div className="course-details-section">
                <h4>Student Reviews</h4>
                <div className="reviews-container">
                  {selectedCourse.reviews.map((review, index) => (
                    <div key={index} className="review-card">
                      <div className="review-header">
                        <div className="reviewer">{review.name}</div>
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <i 
                              key={i} 
                              className={`fas fa-star ${i < review.rating ? 'filled' : ''}`}
                            ></i>
                          ))}
                        </div>
                      </div>
                      <div className="review-comment">{review.comment}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

       <div className="modal-footer">
              <button 
                className="enroll-now-button"
                onClick={handleEnrollClick}
              >
                Enroll Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}

    {/* Enrollment Modal */}
{showEnrollmentModal && selectedCourse && (
  <div className="enrollment-modal">
    <div className="modal-overlay" onClick={() => setShowEnrollmentModal(false)}></div>
    <div className="modal-content">
      <button 
        className="close-modal" 
        onClick={() => setShowEnrollmentModal(false)}
      >
        <i className="fas fa-times"></i>
      </button>
      
      <div className="enrollment-header">
        <h3>Enroll in <span className="course-name">{selectedCourse.name}</span></h3>
        <p className="course-level">{selectedCourse.level} Level</p>
        <div className="header-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </div>
      </div>
      
      <div className="modal-body">
        <div className="course-info-banner">
          <div className="banner-content">
            <div className="banner-left">
              <img src={selectedCourse.imageUrl} alt={selectedCourse.name} />
              <div className="banner-details">
                <p><i className="fas fa-clock"></i> {selectedCourse.levelData.duration}</p>
                <p><i className="fas fa-chalkboard-teacher"></i> {selectedCourse.instructor}</p>
              </div>
            </div>
            <div className="banner-right">
              <div className="price-tag">
                <span className="original-price"> Rs. 299</span>
                <span className="discounted-price">Rs. 249</span>
                <span className="discount-badge">Save Rs. 50</span>
              </div>
            </div>
          </div>
        </div>
        
        <form className="enrollment-form" onSubmit={handleEnrollmentSubmit}>
          <h4 className="form-title">Your Information</h4>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                <i className="fas fa-user"></i> First Name
              </label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName"
                placeholder="Enter your first name" 
                value={formData.firstName}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">
                <i className="fas fa-user"></i> Last Name
              </label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName"
                placeholder="Enter your last name" 
                value={formData.lastName}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <i className="fas fa-phone"></i> Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                placeholder="Enter your phone number" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="experience">
              <i className="fas fa-chart-line"></i> Current Experience Level
            </label>
            <select 
              id="experience" 
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
            >
              <option value="">Select your experience</option>
              <option value="beginner">Beginner (0-1 years)</option>
              <option value="intermediate">Intermediate (1-3 years)</option>
              <option value="advanced">Advanced (3+ years)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="goals">
              <i className="fas fa-bullseye"></i> Learning Goals
            </label>
            <textarea 
              id="goals" 
              name="goals"
              placeholder="What do you hope to achieve with this course?" 
              rows="3"
              value={formData.goals}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div className="form-group checkbox-group">
            <input 
              type="checkbox" 
              id="terms" 
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              required 
            />
            <label htmlFor="terms">
              I agree to the <a href="#">terms and conditions</a> and <a href="#">privacy policy</a>
            </label>
          </div>
          
          <button type="submit" className="submit-enrollment">
            Complete Enrollment <i className="fas fa-check"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
)}
     
    </div>
  );
};

export default CoursePage;