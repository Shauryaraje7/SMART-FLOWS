import React, { useState } from 'react';
import '../styles/courses.css';
import '../styles/Global.css';
import UipathLogo from '../../assets/Ui-path-cloured-logo.svg';






import FooterSection from './FooterSection.jsx';

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
          title: 'UiPath Automation – Beginner',
          imageUrl: UipathLogo,
          description: 'A beginner-friendly course to get started with UiPath. Build real-world bots, automate tasks, and understand core RPA concepts from the ground up — no prior experience needed.',
          detailedDescription: 'This foundational UiPath course is designed to introduce aspiring automation professionals to the world of Robotic Process Automation. You\'ll learn the basics of building automation workflows, using UiPath Studio, variables, activities, control flow, error handling, and more. By the end of the course, you\'ll be able to design and deploy your own bots for daily business tasks.',
          duration: '20+ hours',
          mode: 'Self-paced',
          syllabus: ['Introduction to RPA and UiPath Studio', 'Designing workflows: Sequences, Flowcharts, State Machines', 'Email, Excel, PDF & Web Automation', 'Orchestrator Basics', 'Real-life Use Cases'],
          projects: ['Automate Excel data processing', 'Web data scraping to a spreadsheet', 'Email inbox automation', 'Final capstone: End-to-end business process automation'],
          prerequisites: 'No prior experience needed',
          certification: 'UiPath Certified Associate',
          instructor: 'Marcelo Cruz',
          instructorBio: 'UiPath MVP with 6+ years of RPA development experience.'
        },
        Intermediate: {
          title: 'UiPath Automation – Intermediate',
          description: 'Build on your UiPath fundamentals with advanced workflow logic, arguments, exception handling and deployment practices. Ideal for professionals preparing for UiPath certifications.',
          imageUrl: UipathLogo,
          detailedDescription: 'Take your UiPath automation skills to the next level with this intermediate course focused on building robust, scalable bots. Learn how to manage workflows, use data scraping, automate in Citrix environments, and deploy bots via Orchestrator.',
          duration: '24 hours live + 13 hours self-paced',
          mode: 'Blended',
          syllabus: ['UiPath Studio Advanced Activities', 'Workflow Layouts: Flowcharts, State Machines', 'Data Scraping, Citrix Automation', 'Orchestrator Features: Robots, Queues', 'Debugging and Error Handling'],
          projects: ['Extracting data from PDFs to Excel', 'Automating virtual desktop tasks', 'Deploying bots with Orchestrator queues'],
          prerequisites: 'UiPath Beginner course or equivalent knowledge',
          certification: 'UiPath Certified Professional',
          instructor: 'SmartFlows Corporate Trainers',
          instructorBio: 'Corporate trainers from SmartFlows with deep experience in RPA project delivery and certification preparation.'
        },
        Advanced: {
          title: 'UiPath Automation – Advanced',
          description: 'Master enterprise-grade UiPath automation with hands-on projects. Learn how to build reusable components and deploy production-ready bots.',
          imageUrl: UipathLogo,
          detailedDescription: 'This advanced UiPath course helps you move beyond basics to become an expert in building real-world bots. You\'ll use REFramework, APIs, orchestrator queues, and intelligent document processing to automate complex business workflows.',
          duration: 'Project-based (~15 hours)',
          mode: 'Self-paced',
          syllabus: ['Advanced UiPath Activities and REFramework', 'API Integration & Database Automation', 'Intelligent Document Processing', 'Queue Management and Logging', 'Real-world Bot Deployment Techniques'],
          projects: ['Banking fixed deposit entry bot', 'Invoice processing with OCR', 'Customer creation and validation bot', 'Image-based processing bot (Citrix)'],
          prerequisites: 'UiPath Intermediate course or equivalent knowledge',
          certification: 'UiPath Certified Advanced Developer',
          instructor: 'Minal Gupta',
          instructorBio: 'RPA Solution Architect with 12+ years in automation and process consulting.'
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
          title: 'Power Automate – Beginner',
          description: 'Start your journey with Microsoft Power Automate. Learn to build basic flows and automate everyday tasks using cloud and desktop flows.',
          detailedDescription: 'This beginner-friendly course introduces you to the world of Power Automate. Learn how to build automated workflows that integrate with Microsoft 365, use pre-built templates, and create triggers for tasks like sending emails or extracting data from forms.',
          duration: '15+ hours',
          mode: 'Self-paced or Instructor-led',
          syllabus: ['Flow types: Instant, Automated, Scheduled', 'Using connectors (SharePoint, Excel, Outlook)', 'Creating simple approval workflows', 'Using Power Automate Desktop', 'Microsoft Forms and Teams automation'],
          projects: ['Automate employee onboarding checklist', 'Send automated reminders via Outlook', 'Collect and store Microsoft Forms responses'],
          prerequisites: 'Basic computer skills',
          certification: 'Microsoft Power Platform Fundamentals',
          instructor: 'SmartFlows Certified Instructors',
          instructorBio: 'SmartFlows certified instructors with industry experience in Power Platform solutions.'
        },
        Intermediate: {
          title: 'Power Automate – Intermediate',
          description: 'Enhance your skills to build smarter flows, automate business processes, and integrate with external systems using APIs.',
          detailedDescription: 'This course expands your Power Automate skills by covering business process flows, expressions, approval automation, and integration with AI Builder and custom connectors. Includes best practices for secure flow management and error handling.',
          duration: '22+ hours',
          mode: 'Self-paced',
          syllabus: ['Advanced expressions and conditions', 'Integrating with SharePoint, Dataverse', 'Approval flows and business process flows', 'Flow error handling and optimization', 'Power Automate Desktop deep dive'],
          projects: ['Expense approval automation', 'Multi-stage document review process', 'AI-based sentiment analysis using AI Builder'],
          prerequisites: 'Power Automate Beginner course or equivalent knowledge',
          certification: 'Microsoft Power Platform App Maker',
          instructor: 'Henry Habib',
          instructorBio: 'Veteran Power Platform instructor with 90,000+ students.'
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
          title: 'Automation Anywhere – Beginner',
          description: 'Start building bots using Automation Anywhere. Learn platform essentials, bot creation, and document automation.',
          detailedDescription: 'This beginner course teaches you how to build bots with Automation Anywhere\'s Task Bots and MetaBots. Explore the Control Room, document automation, and prepare for official AA certification.',
          duration: '24h instructor-led + 24h videos + 32h projects',
          mode: 'Blended',
          syllabus: ['RPA and AA architecture', 'Task Bots and MetaBots', 'Recorders and editors', 'IQ Bot (document understanding)', 'Control Room and user roles'],
          projects: ['Form data entry bot', 'Excel file manipulation', 'PDF data extraction with IQ Bot'],
          prerequisites: 'Basic computer skills',
          certification: 'Automation Anywhere Certified Basic RPA Professional',
          instructor: 'Intellipaat Industry Experts',
          instructorBio: 'Industry experts from Intellipaat with Automation Anywhere certification.'
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
          title: 'Automation Anywhere – Advanced',
          description: 'Master intelligent automation with Automation Anywhere. Includes OpenAI/GPT integration and real-world bots.',
          detailedDescription: 'This hands-on course covers advanced bot building with Automation Anywhere, error handling, deployment, and integrations with AI. Build 7 real-world bots and even integrate with OpenAI GPT to create intelligent digital workers.',
          duration: '20+ hours',
          mode: 'Self-paced',
          syllabus: ['Advanced Bot Creator concepts', 'Error handling and testing', 'IQ Bot and Document AI', 'AA + OpenAI integration', 'Project deployment best practices'],
          projects: ['Resume generator bot', 'Form autofill bot', 'AI-based chatbot for FAQs', 'Invoice processing with OpenAI'],
          prerequisites: 'Automation Anywhere Beginner course or equivalent knowledge',
          certification: 'Automation Anywhere Certified Master RPA Professional',
          instructor: 'Deepak Rai',
          instructorBio: 'RPA & AI automation expert.'
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
          title: 'Blue Prism – Beginner',
          description: 'Learn the basics of Blue Prism, a leading enterprise RPA platform. Build your first process using its flow-charting interface.',
          detailedDescription: 'This foundational course is ideal for those new to Blue Prism. Learn how to create, manage and deploy automated processes using Blue Prism Studio, Control Room, and Object Studio. The course covers Blue Prism architecture, development stages, and exception handling.',
          duration: '20+ hours',
          mode: 'Self-paced',
          syllabus: ['Introduction to Blue Prism', 'Process Studio and Object Studio', 'Control Room and Session Management', 'Basic Stages: Inputs, Decisions, Calculations', 'Exception handling'],
          projects: ['Automating login and data entry to a web form', 'Generating summary reports from Excel', 'Basic customer record automation'],
          prerequisites: 'Basic understanding of business processes',
          certification: 'Blue Prism Certified Associate Developer',
          instructor: 'Arun Nair',
          instructorBio: 'Intelligent Automation Architect with 15+ years of experience.'
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
          title: 'Blue Prism – Advanced',
          description: 'Advance your Blue Prism expertise with real-world automation use cases and certification-aligned content.',
          detailedDescription: 'Designed for certified developers or experienced Blue Prism users, this course dives into advanced development strategies, exception handling, and enterprise features like work queues, scheduling, and multi-bot deployment.',
          duration: '25+ hours',
          mode: 'Self-paced',
          syllabus: ['Advanced object and process design', 'Work Queues and Scheduler', 'Release Manager and Deployment', 'Multi-environment configuration', 'Certification (AD01, ASDEV01) prep'],
          projects: ['Invoice automation using PDF inputs', 'Lead qualification via email parsing', 'Blue Prism Release Manager automation'],
          prerequisites: 'Blue Prism Beginner course or equivalent knowledge',
          certification: 'Blue Prism Certified Solution Designer',
          instructor: 'Manish Pandey',
          instructorBio: 'RPA Trainer and certified Blue Prism professional.'
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
          title: 'Power Apps – Beginner',
          description: 'Build your first custom business app without writing code. Learn to create Canvas and Model-driven apps from scratch.',
          detailedDescription: 'Learn how to use Microsoft Power Apps to rapidly build mobile-friendly, data-driven applications. This beginner course covers Canvas apps, screen design, formulas, and integrations with Excel and SharePoint.',
          duration: '20+ hours',
          mode: 'Self-paced or live',
          syllabus: ['Power Apps UI and Canvas apps', 'Controls, forms, and formulas', 'Connectors (Excel, SharePoint, SQL)', 'Dataverse overview', 'Power Automate integrations'],
          projects: ['Timesheet entry app', 'Feedback tracker with SharePoint', 'Mobile inventory app'],
          prerequisites: 'Basic computer skills',
          certification: 'Microsoft Power Platform Fundamentals',
          instructor: 'SmartFlows Trainers',
          instructorBio: 'SmartFlows trainers with Microsoft PL-400 credentials.'
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
          title: 'Power Apps – Advanced',
          description: 'Create advanced business applications using Power Apps and Dataverse. Perfect for developers and tech-savvy users.',
          detailedDescription: 'Learn to build advanced Canvas and Model-driven apps, use custom connectors, and manage app lifecycle with Dataverse. Covers real-world integrations and enterprise app deployment techniques.',
          duration: '7+ hours',
          mode: 'Self-paced',
          syllabus: ['Model-driven apps and Dataverse', 'Responsive app layouts', 'Custom connectors and APIs', 'Advanced logic and formulas', 'Real-world enterprise app examples'],
          projects: ['Customer onboarding app', 'Project tracking dashboard', 'HR portal with form submissions'],
          prerequisites: 'Power Apps Beginner course or equivalent knowledge',
          certification: 'Microsoft Power Platform Developer',
          instructor: 'Henry Habib',
          instructorBio: 'Top-rated Microsoft Power Platform instructor.'
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
        <div className="hero-content-course">
          <h1 className='Allh1'  >Transform Your Career with Automation</h1>
          <p>Master the tools that are shaping the future of business processes</p>
        </div>
      </div>

      <div className="course-container">
        <div className="course-header">
          <h2 className='Allh1'  >Our Automation Courses</h2>
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
                <img src={course.levelData.imageUrl} alt={course.name} />
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
              <i className="fas fa-times"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></i>
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
              <i className="fas fa-times"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></i>
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

                  <textarea
                    id="goals"
                    name="goals"
                    placeholder="What do you hope to achieve with this course?"
                    rows="3"
                    value={formData.goals}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className=" checkbox-group">
                  <input

                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    required
                  />
                  <label className='enroll-form-checkbox' htmlFor="terms">
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

      )}  <FooterSection />

    </div>


  );
};

export default CoursePage;