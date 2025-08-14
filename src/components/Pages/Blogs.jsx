import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogsPage.css';
import FooterSection from '../Sections/FooterSection.jsx';

const BlogsPage = () => {
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
          <h1 className='Allh1 headings'  >Automation Insights & Trends</h1>
          <p className='AllP headingpara'   >Expert perspectives on robotic process automation, AI integration, and digital transformation</p>
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
                    <div className="cardImagePlaceholder">
                      <div className="placeholderText">{post.imagePlaceholder}</div>
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
                    <div className="featuredImagePlaceholder"></div>
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
            <div className="modalImagePlaceholder">
              <div className="placeholderText">{selectedPost.imagePlaceholder}</div>
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