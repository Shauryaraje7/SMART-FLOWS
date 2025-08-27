import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogsPage.css';
import FooterSection from '../Sections/FooterSection.jsx';

// Import all blog images
import rpaTrends2024 from '../../assets/The Future of RPA: Trends to Watch in 2024.png';
import uiPathVsPowerAutomate from '../../assets/UiPath vs Power Automate: Choosing the Right Platform.png';
import aiAgentsAutomation from '../../assets/Implementing AI Agents in Your Automation Strategy.png';
import automationRoi from '../../assets/Measuring ROI on Automation Projects.png';
import automationCoe from '../../assets/Building an Automation Center of Excellence.png';
import rpaSecurity from '../../assets/Security Considerations for RPA Implementations.png';

const BlogsPage = () => {
  // Sample blog data with images
  const allBlogPosts = [
    {
      id: 1,
      title: "The Future of RPA: Trends to Watch in 2024",
      excerpt: "Discover how AI integration and process mining are transforming robotic process automation.",
      content: `<p>The robotic process automation (RPA) landscape continues to evolve at a rapid pace. In 2024, we're seeing several key trends emerge that are reshaping how organizations implement automation:</p>
                <h3>AI-Powered Automation</h3>
                <p>The integration of artificial intelligence with RPA is creating intelligent automation solutions that can handle unstructured data and make context-aware decisions. These cognitive automation capabilities allow bots to interpret documents, understand natural language, and even learn from human behavior patterns, moving beyond simple rule-based tasks.</p>
                <h3>Process Mining Adoption</h3>
                <p>More companies are using process mining tools to identify automation opportunities and measure the impact of their automation initiatives. These tools provide unprecedented visibility into business processes, highlighting bottlenecks, variations, and optimization opportunities that might otherwise remain hidden.</p>
                <h3>Hyperautomation Expansion</h3>
                <p>Organizations are moving toward hyperautomation strategies that combine RPA with AI, analytics, and other advanced technologies to automate increasingly complex business processes end-to-end. This holistic approach is delivering transformative efficiency gains across entire organizations rather than isolated departments.</p>`,
      date: "May 15, 2024",
      category: "Industry Trends",
      readTime: "5 min read",
      image: rpaTrends2024,
      tags: ["RPA", "AI", "Trends", "2024"]
    },
    {
      id: 2,
      title: "UiPath vs Power Automate: Choosing the Right Platform",
      excerpt: "A comprehensive comparison of the two leading RPA platforms.",
      content: `<p>Selecting the right RPA platform is crucial for automation success. Here's how UiPath and Power Automate compare across key dimensions that matter for enterprise implementation:</p>
                <h3>UiPath Strengths</h3>
                <p>UiPath offers robust enterprise features, excellent document understanding capabilities, and strong community support. Its REFramework provides a solid foundation for building scalable, maintainable automation solutions. The platform's computer vision capabilities excel at automating legacy applications that lack API support, making it ideal for complex enterprise environments with diverse technology stacks.</p>
                <h3>Power Automate Advantages</h3>
                <p>Power Automate shines in Microsoft ecosystem integration, low-code approach, and included licensing for Office 365 users. Its seamless connectivity with Dynamics 365, Azure services, and Microsoft Office applications creates a powerful automation environment for organizations deeply invested in the Microsoft ecosystem. The platform's cloud-first approach and intuitive interface significantly reduce the learning curve for new developers.</p>
                <h3>Implementation Considerations</h3>
                <p>When choosing between these platforms, consider your existing technology investments, the complexity of processes you need to automate, and the technical expertise of your automation team. UiPath typically requires more specialized development skills but offers greater flexibility for complex scenarios, while Power Automate enables faster deployment for Microsoft-centric processes.</p>`,
      date: "April 28, 2024",
      category: "Product Comparison",
      readTime: "7 min read",
      image: uiPathVsPowerAutomate,
      tags: ["UiPath", "Power Automate", "Comparison"]
    },
    {
      id: 3,
      title: "Implementing AI Agents in Your Automation Strategy",
      excerpt: "How cognitive automation can take your RPA to the next level.",
      content: `<p>Artificial Intelligence agents represent the next evolutionary step in automation, transforming RPA from task automation to process intelligence. These AI-powered systems can perceive their environment, make decisions, and take actions to achieve specific goals.</p>
                <h3>Understanding AI Agent Architecture</h3>
                <p>AI agents typically consist of four key components: perception modules that interpret inputs, reasoning engines that make decisions, learning systems that improve over time, and action components that execute tasks. This architecture enables them to handle exceptions, adapt to changing conditions, and manage processes that would traditionally require human intervention.</p>
                <h3>Implementation Framework</h3>
                <p>Successful AI agent implementation begins with identifying suitable use cases where uncertainty, variability, and decision-making complexity exist. Start with pilot projects focused on specific business problems, then gradually expand as you build organizational capability and confidence. Ensure you have the right data infrastructure in place, as AI agents require access to high-quality, relevant data to function effectively.</p>
                <h3>Measuring Success</h3>
                <p>Beyond traditional ROI metrics, evaluate AI agent performance based on decision accuracy, exception handling rates, process cycle time reduction, and improvement in customer or employee satisfaction scores. These advanced metrics provide a more comprehensive view of how cognitive automation is transforming your business operations.</p>`,
      date: "April 10, 2024",
      category: "Technical Guide",
      readTime: "8 min read",
      image: aiAgentsAutomation,
      tags: ["AI", "Agents", "Cognitive"]
    },
    {
      id: 4,
      title: "Measuring ROI on Automation Projects",
      excerpt: "Key metrics to calculate return on investment from automation.",
      content: `<p>Calculating accurate return on investment for automation initiatives requires looking beyond simple labor displacement metrics. A comprehensive ROI analysis should capture both quantitative and qualitative benefits across multiple dimensions of business value.</p>
                <h3>Financial Metrics</h3>
                <p>Direct financial benefits include labor cost reduction, error reduction savings, increased throughput, and improved compliance avoidance. Calculate these using time-tracking data, error rate comparisons, throughput measurements, and historical compliance incident costs. Remember to account for implementation costs, licensing fees, and maintenance overhead in your calculations.</p>
                <h3>Operational Metrics</h3>
                <p>Operational improvements include process cycle time reduction, increased capacity utilization, improved quality rates, and enhanced scalability. These metrics often deliver significant value that isn't immediately captured in financial statements but contributes substantially to organizational agility and competitive advantage.</p>
                <h3>Strategic Benefits</h3>
                <p>Consider qualitative benefits such as employee satisfaction improvement (from eliminating repetitive tasks), customer experience enhancement (through faster, more accurate service), and innovation capacity (by freeing human workers for higher-value activities). While harder to quantify, these strategic benefits often deliver the most significant long-term value from automation investments.</p>`,
      date: "March 22, 2024",
      category: "Business Insights",
      readTime: "6 min read",
      image: automationRoi,
      tags: ["ROI", "Metrics", "Business"]
    },
    {
      id: 5,
      title: "Building an Automation Center of Excellence",
      excerpt: "Guide to establishing a successful CoE for automation.",
      content: `<p>An Automation Center of Excellence (CoE) serves as the central hub for driving automation strategy, governance, and execution across your organization. Establishing an effective CoE requires careful planning across people, processes, and technology dimensions.</p>
                <h3>Structural Framework</h3>
                <p>A successful CoE typically includes cross-functional representation from business operations, IT, compliance, and change management. This structure ensures that automation initiatives align with business goals, technical standards, regulatory requirements, and organizational change readiness. The CoE should have clearly defined roles including automation architects, developers, business analysts, and governance specialists.</p>
                <h3>Governance Processes</h3>
                <p>Implement robust governance processes for pipeline management, prioritization, development standards, and production support. Establish clear criteria for selecting automation opportunities based on complexity, ROI potential, and strategic alignment. Create standardized documentation templates, coding standards, and testing protocols to ensure consistency and quality across all automation projects.</p>
                <h3>Scaling Strategies</h3>
                <p>As your automation program matures, develop strategies for scaling beyond the initial CoE model. Consider federated approaches that embed automation capabilities within business units while maintaining central governance. Implement citizen developer programs to empower business users to create simple automations, while reserving complex processes for specialized developers.</p>`,
      date: "March 5, 2024",
      category: "Best Practices",
      readTime: "9 min read",
      image: automationCoe,
      tags: ["CoE", "Best Practices"]
    },
    {
      id: 6,
      title: "Security Considerations for RPA Implementations",
      excerpt: "Essential security practices for robotic process automation.",
      content: `<p>As RPA handles sensitive business data and system access, implementing robust security measures is critical for protecting organizational assets and maintaining regulatory compliance. A comprehensive RPA security strategy addresses multiple layers of protection.</p>
                <h3>Access Control and Authentication</h3>
                <p>Implement the principle of least privilege for bot accounts, granting only the minimum permissions necessary to complete assigned tasks. Use dedicated service accounts for bots rather than shared or personal accounts. Implement multi-factor authentication and credential management solutions to secure access to applications and systems. Regularly review and audit bot permissions to ensure they remain appropriate as processes change.</p>
                <h3>Data Protection</h3>
                <p>Encrypt sensitive data both at rest and in transit, including within automation logs and monitoring systems. Implement data masking and redaction techniques to prevent exposure of sensitive information in screenshots, logs, or error messages. Establish clear data handling policies that define what types of data bots can process, store, or transmit based on classification levels.</p>
                <h3>Infrastructure Security</h3>
                <p>Secure your RPA infrastructure through network segmentation, regular vulnerability scanning, and patch management. Isolate development, testing, and production environments to prevent unauthorized access or changes. Implement comprehensive logging and monitoring to detect anomalous behavior, with alerts for security-related events such as multiple failed login attempts or unusual process execution patterns.</p>`,
      date: "February 18, 2024",
      category: "Security",
      readTime: "5 min read",
      image: rpaSecurity,
      tags: ["Security", "RPA"]
    }
  ];

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOption, setSortOption] = useState("Newest First");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTag, setActiveTag] = useState(null);
  const postsPerPage = 4;

  // Get unique categories
  const categories = ["All Categories", ...new Set(allBlogPosts.map(post => post.category))];

  // Get all unique tags from all posts
  const allTags = ["All", ...new Set(allBlogPosts.flatMap(post => post.tags))];

  // Filter and sort posts
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !activeTag || activeTag === "All" || post.tags.includes(activeTag);
    return matchesCategory && matchesSearch && matchesTag;
  }).sort((a, b) => {
    if (sortOption === "Newest First") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "Oldest First") {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle post selection
  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle tag click
  const handleTagClick = (tag) => {
    setActiveTag(tag === activeTag ? null : tag);
    setCurrentPage(1);
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortOption, searchQuery, activeTag]);

  // Reset all filters
  const resetAllFilters = () => {
    setSelectedCategory("All Categories");
    setSearchQuery("");
    setActiveTag(null);
  };

  return (
    <div className="blogsContainer">
      {/* Blog Hero Section */}
      <section className="blogsHero">
        <div className="heroContent">
          <h1 className='Allh1 headings'>Automation Insights & Trends</h1>
          <p className='AllP headingpara'>Expert perspectives on robotic process automation, AI integration, and digital transformation</p>
          <div className="searchBar">
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="searchButton">Search</button>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <div className="blogsMainContainer">
        {/* Articles Section */}
        <main className="articlesSection">
          <div className="sectionHeader">
            <h2>Latest Articles</h2>
            <div className="filterOptions">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="Newest First">Newest First</option>
                <option value="Oldest First">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Active filters display */}
          {(selectedCategory !== "All Categories" || searchQuery || activeTag) && (
            <div className="activeFilters">
              <p>Active filters: </p>
              {selectedCategory !== "All Categories" && (
                <span className="activeFilter">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory("All Categories")}>×</button>
                </span>
              )}
              {searchQuery && (
                <span className="activeFilter">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")}>×</button>
                </span>
              )}
              {activeTag && (
                <span className="activeFilter">
                  Tag: {activeTag}
                  <button onClick={() => setActiveTag(null)}>×</button>
                </span>
              )}
              <button className="resetAllFilters" onClick={resetAllFilters}>
                Reset All
              </button>
            </div>
          )}

          {currentPosts.length > 0 ? (
            <>
              <div className="articlesGrid">
                {currentPosts.map((post) => (
                  <article 
                    className="blogCard" 
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                  >
                    <div className="cardImage">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="cardContent">
                      <div className="postMeta">
                        <span className="category">{post.category}</span>
                        <span className="date">{post.date}</span>
                        <span className="read-time">{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p className="postExcerpt">{post.excerpt}</p>
                      <div className="postTags">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="tag" onClick={(e) => {
                            e.stopPropagation();
                            handleTagClick(tag);
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="readMoreLink">Read More →</div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={currentPage === number ? 'active' : ''}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="noResults">
              <p>No articles found matching your criteria.</p>
              <button 
                onClick={resetAllFilters}
                className="resetFilters"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="blogSidebar">
          <div className="sidebarWidget">
            <h3>Popular Tags</h3>
            <div className="tagsContainer">
              {allTags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`tag ${activeTag === tag ? 'active' : ''}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="sidebarWidget">
            <h3>Newsletter</h3>
            <p>Stay updated with the latest automation insights</p>
            <form className="newsletterForm">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="sidebarWidget">
            <h3>Featured Posts</h3>
            <div className="featuredPosts">
              {allBlogPosts
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map(post => (
                  <div 
                    className="featuredPost" 
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                  >
                    <div className="featuredImage">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="featuredContent">
                      <h4>{post.title}</h4>
                      <span className="featuredDate">{post.date}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Article Modal */}
      {isModalOpen && selectedPost && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={e => e.stopPropagation()}>
            <button className="closeModal" onClick={closeModal}>×</button>
            <div className="modalImage">
              <img src={selectedPost.image} alt={selectedPost.title} />
            </div>
            <div className="modalBody">
              <div className="modalMeta">
                <span className="category">{selectedPost.category}</span>
                <span className="date">{selectedPost.date}</span>
                <span className="read-time">{selectedPost.readTime}</span>
              </div>
              <h2>{selectedPost.title}</h2>
              <div 
                className="modalPostContent" 
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              <div className="tagsContainer">
                {selectedPost.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="tag"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default BlogsPage;