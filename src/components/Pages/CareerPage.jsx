import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CareerPage.css';
import FooterSection from '../Sections/FooterSection.jsx';

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    linkedIn: '',
    portfolio: '',
    salaryExpectations: '',
    noticePeriod: '',
    relocation: 'no',
    diversity: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sample job data
   const jobOpenings = [
    {
      id: 1,
      title: "RPA Developer (UiPath)",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      description: "We're looking for an experienced UiPath developer to design and implement automation solutions for our clients.",
      responsibilities: [
        "Develop and maintain UiPath automation workflows",
        "Collaborate with business analysts to understand requirements",
        "Troubleshoot and debug automation processes",
        "Implement best practices for RPA development"
      ],
      requirements: [
        "3+ years of experience with UiPath",
        "Strong understanding of RPA concepts",
        "Experience with .NET and C#",
        "Knowledge of AI/ML integration is a plus"
      ]
    },
    {
      id: 2,
      title: "Power Automate Specialist",
      type: "Full-time",
      location: "Hybrid",
      department: "Engineering",
      description: "Join our team as a Power Automate expert to create efficient workflows and automation solutions.",
      responsibilities: [
        "Design and implement Power Automate flows",
        "Integrate with Microsoft Power Platform",
        "Optimize existing automation processes",
        "Provide technical guidance to clients"
      ],
      requirements: [
        "2+ years of Power Automate experience",
        "Knowledge of Power Apps and Power BI",
        "Understanding of API integrations",
        "Microsoft certification preferred"
      ]
    },
    {
      id: 3,
      title: "Automation Solutions Architect",
      type: "Full-time",
      location: "Remote",
      department: "Architecture",
      description: "Lead the design of enterprise-scale automation solutions for our diverse client base.",
      responsibilities: [
        "Design end-to-end automation architectures",
        "Evaluate and select appropriate RPA tools",
        "Establish automation best practices",
        "Mentor junior team members"
      ],
      requirements: [
        "5+ years in RPA/automation field",
        "Experience with multiple RPA platforms",
        "Strong system integration knowledge",
        "Excellent communication skills"
      ]
    },
    {
      id: 4,
      title: "RPA Business Analyst",
      type: "Contract",
      location: "On-site",
      department: "Consulting",
      description: "Bridge the gap between business needs and technical solutions in our automation projects.",
      responsibilities: [
        "Gather and document business requirements",
        "Identify automation opportunities",
        "Create process documentation",
        "Support testing and deployment"
      ],
      requirements: [
        "Experience in business analysis",
        "Understanding of RPA concepts",
        "Strong analytical skills",
        "BPMN knowledge is a plus"
      ]
    },
    {
      id: 5,
      title: "Automation QA Engineer",
      type: "Full-time",
      location: "Remote",
      department: "Quality Assurance",
      description: "Ensure the quality and reliability of our automation solutions through rigorous testing.",
      responsibilities: [
        "Develop test plans for RPA solutions",
        "Execute functional and regression tests",
        "Identify and document defects",
        "Automate test cases where possible"
      ],
      requirements: [
        "3+ years in QA/testing",
        "Experience with test automation",
        "Knowledge of RPA tools",
        "ISTQB certification preferred"
      ]
    },
    {
      id: 6,
      title: "Technical Sales Engineer",
      type: "Full-time",
      location: "Hybrid",
      department: "Sales",
      description: "Combine technical expertise with sales skills to drive our automation solutions.",
      responsibilities: [
        "Present technical solutions to clients",
        "Support sales team with expertise",
        "Conduct product demonstrations",
        "Gather customer requirements"
      ],
      requirements: [
        "Technical background in RPA/automation",
        "2+ years in presales or sales engineering",
        "Excellent presentation skills",
        "Ability to travel occasionally"
      ]
    }
  ];

  // Filter jobs based on active tab and search term
  const filteredJobs = jobOpenings.filter(job => {
    const matchesTab = activeTab === 'all' || job.department.toLowerCase() === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Get unique departments for tabs
  const departments = [...new Set(jobOpenings.map(job => job.department))];

  // Handle apply now click
  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    setFormData({
      ...formData,
      applyingFor: job.title
    });
    document.body.style.overflow = 'hidden'; // Prevent scrolling when form is open
  };

  // Close application form
  const closeApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setFormErrors({});
    document.body.style.overflow = 'auto';
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    });
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.resume) errors.resume = 'Resume is required';
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setSubmitSuccess(false);
          closeApplicationForm();
          setFormData({
            name: '',
            email: '',
            phone: '',
            resume: null,
            coverLetter: '',
            linkedIn: '',
            portfolio: '',
            salaryExpectations: '',
            noticePeriod: '',
            relocation: 'no',
            diversity: ''
          });
        }, 3000);
      }, 1500);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="carrespage-careers-page">
      {/* Hero Section */}
      <section className="carrespage-careers-hero">
        <div className="carrespage-hero-content">
          <h1  className='Allh1 headings'  >Build the Future of Automation</h1>
          <p  className='AlllP headingpara'   >Join our team of innovators creating intelligent automation solutions that transform businesses</p>
          <Link to="#open-positions" className="carrespage-cta-button">View Open Positions</Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="carrespage-benefits-section">
        <div className="carrespage-section-header">
          <h2 className='subheadings Allh1'   >Why Join SmartFlows?</h2>
          <p  className='subheadingpara'   >We're building more than automation solutions - we're building an exceptional workplace</p>
        </div>
        <div className="carrespage-benefits-grid">
          <div className="carrespage-benefit-card">
            <div className="carrespage-benefit-icon">💡</div>
            <h3 className='smallheading Allh1'    >Innovation Culture</h3>
            <p className='smallpara AllP'  >Work with cutting-edge technologies in AI and automation</p>
          </div>
          <div className="carrespage-benefit-card">
            <div className="carrespage-benefit-icon">🌍</div>
            <h3 className='smallheading Allh1'  >Flexible Work</h3>
            <p className='smallpara AllP'  >Remote and hybrid options for most positions</p>
          </div>
          <div className="carrespage-benefit-card">
            <div className="carrespage-benefit-icon">📈</div>
            <h3 className='smallheading Allh1'  >Career Growth</h3>
            <p className='smallpara AllP'   >Continuous learning and advancement opportunities</p>
          </div>
          <div className="carrespage-benefit-card">
            <div className="carrespage-benefit-icon">🤝</div>
            <h3 className='smallheading Allh1'  >Great Team</h3>
            <p className='smallpara AllP'    >Collaborate with talented, passionate professionals</p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="carrespage-job-openings" id="open-positions">
        <div className="carrespage-section-header">
          <h2>Current Openings</h2>
          <p>Find your perfect role in our growing team</p>
        </div>

        <div className="carrespage-jobs-controls">
          <div className="carrespage-search-bar">
            <input 
              type="text" 
              placeholder="Search jobs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="carrespage-search-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <div className="carrespage-department-tabs">
            <button 
              className={activeTab === 'all' ? 'active' : ''}
              onClick={() => setActiveTab('all')}
            >
              All Departments
            </button>
            {departments.map(dept => (
              <button
                key={dept}
                className={activeTab === dept.toLowerCase() ? 'active' : ''}
                onClick={() => setActiveTab(dept.toLowerCase())}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="carrespage-jobs-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onApplyClick={handleApplyClick} />
            ))
          ) : (
            <div className="carrespage-no-jobs">
              <p>No current openings match your criteria.</p>
              <button 
                onClick={() => {
                  setActiveTab('all');
                  setSearchTerm('');
                }}
                className="carrespage-reset-filters"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="carrespage-culture-section">
        <div className="carrespage-culture-content">
          <h2>Our Culture</h2>
          <p>At SmartFlows, we believe that great automation starts with great people. We foster a culture of collaboration, innovation, and continuous learning where every team member can thrive.</p>
          <div className="carrespage-culture-points">
            <div className="carrespage-culture-point">
              <h3>Ownership</h3>
              <p>We trust our team to take initiative and deliver results</p>
            </div>
            <div className="carrespage-culture-point">
              <h3>Learning</h3>
              <p>Continuous growth is at the heart of what we do</p>
            </div>
            <div className="carrespage-culture-point">
              <h3>Impact</h3>
              <p>See the direct results of your work with clients</p>
            </div>
          </div>
          <Link to="/about" className="carrespage-outline-button">Learn More About Us</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="carrespage-careers-cta">
        <div className="carrespage-cta-content">
          <h2>Don't See Your Dream Role?</h2>
          <p>We're always looking for talented individuals. Send us your resume and we'll contact you when a matching position opens.</p>
          <button onClick={() => handleApplyClick({ title: "General Application" })} className="carrespage-cta-button">Submit Your Resume</button>
        </div>
      </section>
      
      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="carrespage-application-modal">
          <div className="carrespage-modal-overlay" onClick={closeApplicationForm}></div>
          <div className="carrespage-modal-content">
            <button className="carrespage-close-modal" onClick={closeApplicationForm}>
              &times;
            </button>
            
            {submitSuccess ? (
              <div className="carrespage-submission-success">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Application Submitted Successfully!</h3>
                <p>Thank you for applying to {selectedJob.title}. We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2>Apply for {selectedJob.title}</h2>
                <form onSubmit={handleSubmit} className="carrespage-application-form">
                  <div className="carrespage-form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="carrespage-error-message">{formErrors.name}</span>}
                  </div>
                  
                  <div className="carrespage-form-row">
                    <div className="carrespage-form-group">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span className="carrespage-error-message">{formErrors.email}</span>}
                    </div>
                    
                    <div className="carrespage-form-group">
                      <label htmlFor="phone">Phone*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className={formErrors.phone ? 'error' : ''}
                      />
                      {formErrors.phone && <span className="carrespage-error-message">{formErrors.phone}</span>}
                    </div>
                  </div>
                  
                  <div className="carrespage-form-group">
                    <label htmlFor="resume">Resume/CV* (PDF, DOC, DOCX)</label>
                    <div className="carrespage-file-upload">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className={formErrors.resume ? 'error' : ''}
                      />
                      <label htmlFor="resume" className="carrespage-file-label">
                        {formData.resume ? formData.resume.name : 'Choose File'}
                      </label>
                    </div>
                    {formErrors.resume && <span className="carrespage-error-message">{formErrors.resume}</span>}
                  </div>
                  
                  <div className="carrespage-form-group">
                    <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're a great fit for this position..."
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <div className="carrespage-form-row">
                    <div className="carrespage-form-group">
                      <label htmlFor="linkedIn">LinkedIn Profile (Optional)</label>
                      <input
                        type="url"
                        id="linkedIn"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    
                    <div className="carrespage-form-group">
                      <label htmlFor="portfolio">Portfolio/Website (Optional)</label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>
                  
                  <div className="carrespage-form-row">
                    <div className="carrespage-form-group">
                      <label htmlFor="salaryExpectations">Salary Expectations (Optional)</label>
                      <input
                        type="text"
                        id="salaryExpectations"
                        name="salaryExpectations"
                        value={formData.salaryExpectations}
                        onChange={handleInputChange}
                        placeholder="$XX,XXX - $XX,XXX"
                      />
                    </div>
                    
                    <div className="carrespage-form-group">
                      <label htmlFor="noticePeriod">Notice Period (Optional)</label>
                      <input
                        type="text"
                        id="noticePeriod"
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleInputChange}
                        placeholder="e.g., 2 weeks, 1 month"
                      />
                    </div>
                  </div>
                  
                  <div className="carrespage-form-row">
                    <div className="carrespage-form-group">
                      <label htmlFor="relocation">Willing to Relocate?</label>
                      <select
                        id="relocation"
                        name="relocation"
                        value={formData.relocation}
                        onChange={handleInputChange}
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                        <option value="maybe">Maybe, for the right opportunity</option>
                      </select>
                    </div>
                    
                    <div className="carrespage-form-group">
                      <label htmlFor="diversity">Diversity Information (Optional)</label>
                      <select
                        id="diversity"
                        name="diversity"
                        value={formData.diversity}
                        onChange={handleInputChange}
                      >
                        <option value="">Prefer not to say</option>
                        <option value="female">Female</option>
                        <option value="veteran">Veteran</option>
                        <option value="lgbtq">LGBTQ+</option>
                        <option value="disabled">Person with Disability</option>
                        <option value="minority">Race/Ethnic Minority</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="carrespage-form-footer">
                    <p className="carrespage-form-note">
                      * Required fields. We value your privacy and will only use your information for recruitment purposes.
                    </p>
                    <button type="submit" className="carrespage-submit-button" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
      
      <FooterSection />
    </div>
  );
};

// Job Card Component
const JobCard = ({ job, onApplyClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`carrespage-job-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="carrespage-job-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="carrespage-job-title">
          <h3>{job.title}</h3>
          <div className="carrespage-job-meta">
            <span>{job.type}</span>
            <span>{job.location}</span>
            <span>{job.department}</span>
          </div>
        </div>
        <div className="carrespage-expand-icon">
          {isExpanded ? '−' : '+'}
        </div>
      </div>
      
      {isExpanded && (
        <div className="carrespage-job-details">
          <div className="job-description">
            <h4>About This Role</h4>
            <p>{job.description}</p>
          </div>
          <div className="job-responsibilities">
            <h4>Responsibilities</h4>
            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="job-requirements">
            <h4>Requirements</h4>
            <ul>
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => onApplyClick(job)} className="carrespage-apply-button">Apply Now</button>
        </div>
      )}
    </div>
  );
};

export default CareersPage;