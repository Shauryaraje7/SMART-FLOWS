import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesPage.css';

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1>Build the Future of Automation</h1>
          <p>Join our team of innovators creating intelligent automation solutions that transform businesses</p>
          <Link to="#open-positions" className="cta-button">View Open Positions</Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-header">
          <h2>Why Join SmartFlows?</h2>
          <p>We're building more than automation solutions - we're building an exceptional workplace</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">💡</div>
            <h3>Innovation Culture</h3>
            <p>Work with cutting-edge technologies in AI and automation</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌍</div>
            <h3>Flexible Work</h3>
            <p>Remote and hybrid options for most positions</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📈</div>
            <h3>Career Growth</h3>
            <p>Continuous learning and advancement opportunities</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3>Great Team</h3>
            <p>Collaborate with talented, passionate professionals</p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="job-openings" id="open-positions">
        <div className="section-header">
          <h2>Current Openings</h2>
          <p>Find your perfect role in our growing team</p>
        </div>

        <div className="jobs-controls">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search jobs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <div className="department-tabs">
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

        <div className="jobs-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="no-jobs">
              <p>No current openings match your criteria.</p>
              <button 
                onClick={() => {
                  setActiveTab('all');
                  setSearchTerm('');
                }}
                className="reset-filters"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <div className="culture-content">
          <h2>Our Culture</h2>
          <p>At SmartFlows, we believe that great automation starts with great people. We foster a culture of collaboration, innovation, and continuous learning where every team member can thrive.</p>
          <div className="culture-points">
            <div className="culture-point">
              <h3>Ownership</h3>
              <p>We trust our team to take initiative and deliver results</p>
            </div>
            <div className="culture-point">
              <h3>Learning</h3>
              <p>Continuous growth is at the heart of what we do</p>
            </div>
            <div className="culture-point">
              <h3>Impact</h3>
              <p>See the direct results of your work with clients</p>
            </div>
          </div>
          <Link to="/about" className="outline-button">Learn More About Us</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="cta-content">
          <h2>Don't See Your Dream Role?</h2>
          <p>We're always looking for talented individuals. Send us your resume and we'll contact you when a matching position opens.</p>
          <Link to="/contact" className="cta-button">Submit Your Resume</Link>
        </div>
      </section>
    </div>
  );
};

// Job Card Component
const JobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`job-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="job-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="job-title">
          <h3>{job.title}</h3>
          <div className="job-meta">
            <span>{job.type}</span>
            <span>{job.location}</span>
            <span>{job.department}</span>
          </div>
        </div>
        <div className="expand-icon">
          {isExpanded ? '−' : '+'}
        </div>
      </div>
      
      {isExpanded && (
        <div className="job-details">
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
          <Link to={`/apply/${job.id}`} className="apply-button">Apply Now</Link>
        </div>
      )}
    </div>
  );
};

export default CareersPage;