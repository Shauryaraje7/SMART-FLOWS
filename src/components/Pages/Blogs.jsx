import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogsPage.css';

const BlogPage = () => {
  // Sample blog data with image placeholder
  const allBlogPosts = [
    {
      id: 1,
      title: "The Future of RPA: Trends to Watch in 2024",
      excerpt: "Discover how AI integration and process mining are transforming robotic process automation.",
      content: `<p>The robotic process automation (RPA) landscape continues to evolve at a rapid pace. In 2024, we're seeing several key trends emerge that are reshaping how organizations implement automation:</p>
                <h3>AI-Powered Automation</h3>
                <p>The integration of artificial intelligence with RPA is creating intelligent automation solutions that can handle unstructured data and make context-aware decisions.</p>
                <h3>Process Mining Adoption</h3>
                <p>More companies are using process mining tools to identify automation opportunities and measure the impact of their automation initiatives.</p>`,
      date: "May 15, 2024",
      category: "Industry Trends",
      readTime: "5 min read",
      imagePlaceholder: "rpa-trends-2024",
      tags: ["RPA", "AI", "Trends", "2024"]
    },
    {
      id: 2,
      title: "UiPath vs Power Automate: Choosing the Right Platform",
      excerpt: "A comprehensive comparison of the two leading RPA platforms.",
      content: `<p>Selecting the right RPA platform is crucial for automation success. Here's how UiPath and Power Automate compare:</p>
                <h3>UiPath Strengths</h3>
                <p>UiPath offers robust enterprise features, excellent document understanding capabilities, and strong community support.</p>
                <h3>Power Automate Advantages</h3>
                <p>Power Automate shines in Microsoft ecosystem integration, low-code approach, and included licensing for Office 365 users.</p>`,
      date: "April 28, 2024",
      category: "Product Comparison",
      readTime: "7 min read",
      imagePlaceholder: "uipath-vs-powerautomate",
      tags: ["UiPath", "Power Automate", "Comparison"]
    },
    // Add 4 more sample posts with similar structure
    {
      id: 3,
      title: "Implementing AI Agents in Your Automation Strategy",
      excerpt: "How cognitive automation can take your RPA to the next level.",
      content: "<p>Detailed content about AI agents...</p>",
      date: "April 10, 2024",
      category: "Technical Guide",
      readTime: "8 min read",
      imagePlaceholder: "ai-agents-automation",
      tags: ["AI", "Agents", "Cognitive"]
    },
    {
      id: 4,
      title: "Measuring ROI on Automation Projects",
      excerpt: "Key metrics to calculate return on investment from automation.",
      content: "<p>Detailed content about ROI...</p>",
      date: "March 22, 2024",
      category: "Business Insights",
      readTime: "6 min read",
      imagePlaceholder: "automation-roi",
      tags: ["ROI", "Metrics", "Business"]
    },
    {
      id: 5,
      title: "Building an Automation Center of Excellence",
      excerpt: "Guide to establishing a successful CoE for automation.",
      content: "<p>Detailed content about CoE...</p>",
      date: "March 5, 2024",
      category: "Best Practices",
      readTime: "9 min read",
      imagePlaceholder: "automation-coe",
      tags: ["CoE", "Best Practices"]
    },
    {
      id: 6,
      title: "Security Considerations for RPA Implementations",
      excerpt: "Essential security practices for robotic process automation.",
      content: "<p>Detailed content about security...</p>",
      date: "February 18, 2024",
      category: "Security",
      readTime: "5 min read",
      imagePlaceholder: "rpa-security",
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
  const postsPerPage = 4;

  // Get unique categories
  const categories = ["All Categories", ...new Set(allBlogPosts.map(post => post.category))];

  // Filter and sort posts
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortOption, searchQuery]);

  return (
    <div className="blog-page">
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1>Automation Insights & Trends</h1>
          <p>Expert perspectives on robotic process automation, AI integration, and digital transformation</p>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <div className="blog-container">
        {/* Articles Section */}
        <main className="articles-section">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <div className="filter-options">
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

          {currentPosts.length > 0 ? (
            <>
              <div className="articles-grid">
                {currentPosts.map((post) => (
                  <article 
                    className="blog-card" 
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                  >
                    <div className="image-placeholder">
                      <div className="placeholder-text">{post.imagePlaceholder}</div>
                    </div>
                    <div className="card-content">
                      <div className="post-meta">
                        <span className="category">{post.category}</span>
                        <span className="date">{post.date}</span>
                        <span className="read-time">{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p className="excerpt">{post.excerpt}</p>
                      <div className="read-more">Read More →</div>
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
            <div className="no-results">
              <p>No articles found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSearchQuery("");
                }}
                className="reset-filters"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Popular Tags</h3>
            <div className="tags-container">
              {["RPA", "UiPath", "Power Automate", "AI", "Process Mining", 
                "Automation", "Digital Transformation", "Best Practices", "Case Studies"]
                .map((tag, index) => (
                  <span 
                    key={index} 
                    className="tag"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>

          <div className="sidebar-widget">
            <h3>Newsletter</h3>
            <p>Stay updated with the latest automation insights</p>
            <form className="newsletter-form-blogs">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="sidebar-widget">
            <h3>Featured Posts</h3>
            <div className="featured-posts">
              {allBlogPosts
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map(post => (
                  <div 
                    className="featured-post" 
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                  >
                    <div className="featured-image-placeholder"></div>
                    <div className="featured-content">
                      <h4>{post.title}</h4>
                      <span className="featured-date">{post.date}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Article Modal */}
      {isModalOpen && selectedPost && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-image-placeholder">
              <div className="placeholder-text">{selectedPost.imagePlaceholder}</div>
            </div>
            <div className="modal-body">
              <div className="modal-meta">
                <span className="category">{selectedPost.category}</span>
                <span className="date">{selectedPost.date}</span>
                <span className="read-time">{selectedPost.readTime}</span>
              </div>
              <h2>{selectedPost.title}</h2>
              <div 
                className="modal-post-content" 
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              <div className="tags-container">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;