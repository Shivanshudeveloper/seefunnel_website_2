import { JSDOM } from 'jsdom';
import { API_SERVICE_URL } from "@/config";

/*
COPYWRITER NOTES:
- We need more visually appealing content for the blog grid (without using images)
- Focus on creating attention-grabbing headlines that stand out in the grid
- Use color-coded categories to create visual organization
- Break up text with subheadings, bullet points, and short paragraphs
- Keep intro paragraphs concise and compelling to fit the card format
- Use pull quotes for important statements that can catch attention
- Consider adding "Read time" estimates based on content length
- Add clear, benefit-focused meta descriptions for each article
- Create clear CTAs within the content to encourage further reading
*/

// app/blog/page.js
export const metadata = {
    title: 'Blog: B2B Sales, Lead Generation & Marketing Insights | Seefunnel',
    description: 'Explore expert insights on B2B sales strategies, lead generation techniques, and marketing best practices. Stay updated with Seefunnel\'s comprehensive guides and tips.',
    metadataBase: new URL('https://seefunnel.com'),
    alternates: {
      canonical: '/blogs'
    },
    openGraph: {
      title: 'Seefunnel Blog: B2B Sales & Lead Generation Insights',
      description: 'Discover actionable insights on B2B sales strategies, lead generation, and marketing automation. Learn from industry experts at Seefunnel.',
      url: 'https://seefunnel.com/blogs',
      siteName: '@seefunnel.com',
      images: [
        {
          url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730294422/cta/gi8pt9x9q6ciwqy8azyl.jpg',
          width: 500,
          height: 500,
          alt: 'Seefunnel Blog - B2B Sales & Marketing Insights',
          type: 'image/jpeg',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@seefunnel.com',
      creator: '@seefunnel.com',
      title: 'Seefunnel Blog: B2B Sales & Lead Generation Insights',
      description: 'Discover actionable insights on B2B sales strategies, lead generation, and marketing automation. Learn from industry experts at Seefunnel.',
      images: ['https://res.cloudinary.com/daboha8rt/image/upload/v1730294422/cta/gi8pt9x9q6ciwqy8azyl.jpg'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: [
        { url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296194/cta/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296255/cta/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        { url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296311/cta/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    keywords: [
      'B2B sales strategies',
      'lead generation',
      'marketing automation',
      'sales optimization',
      'B2B marketing',
      'sales funnel optimization',
      'business growth',
      'sales analytics'
    ]
}
  
// Schema.org structured data for blog listing page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  'name': 'Seefunnel Blog',
  'description': 'Expert insights and strategies for B2B sales, lead generation, and marketing automation',
  'url': 'https://seefunnel.com/blogs',
  'publisher': {
    '@type': 'Organization',
    'name': 'Seefunnel',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://seefunnel.com/assets/images/seefunnel-logo.png'
    }
  }
}

// Style definitions to add to the page
const typographyStyles = `
  <style>
    /* Typography Hierarchy */
    h2 {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: #212529;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    
    h3 {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
      color: #343a40;
      line-height: 1.3;
    }
    
    h4 {
      font-size: 1.375rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #495057;
      line-height: 1.4;
    }
    
    /* Blog Grid & Card Improvements */
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .blog-card {
      border-radius: 12px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.08);
      transition: all 0.35s ease;
      background-color: #fff;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      cursor: pointer;
      border-top: 4px solid #7F39F8;
    }
    
    .blog-card:hover {
      box-shadow: 0 12px 30px rgba(127, 57, 248, 0.15);
      transform: translateY(-8px);
    }
    
    .blog-card-body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      min-height: 260px;
    }
    
    .blog-card-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      line-height: 1.3;
      transition: color 0.2s ease;
    }
    
    .blog-card:hover .blog-card-title {
      color: #7F39F8;
    }
    
    .blog-content-preview {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #495057;
      margin-bottom: 1rem;
      flex-grow: 1;
    }
    
    /* Featured post styling */
    .featured-post {
      grid-column: 1 / -1;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 16px;
      padding: 2.5rem;
      margin-bottom: 2rem;
      border-left: 6px solid #7F39F8;
    }
    
    .featured-post-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .featured-post-content {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }
    
    /* Tag styles */
    .blog-tags {
      margin-bottom: 1rem;
    }
    
    .blog-tag {
      display: inline-block;
      padding: 0.35rem 0.75rem;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
    
    .tag-primary {
      background-color: #7F39F8;
      color: white;
    }
    
    .tag-secondary {
      background-color: #f8f9fa;
      color: #495057;
    }
    
    /* Blog meta styles */
    .blog-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      font-size: 0.875rem;
      padding-top: 1rem;
      border-top: 1px solid #e9ecef;
    }
    
    .blog-author {
      font-weight: 600;
      color: #212529;
    }
    
    .blog-author-highlight {
      color: #7F39F8;
    }
    
    .read-more-link {
      font-weight: 600;
      color: #7F39F8;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    
    .read-more-link:hover {
      color: #6428c8;
      text-decoration: underline;
    }
    
    .read-more-icon {
      margin-left: 6px;
      transition: transform 0.2s ease;
    }
    
    .read-more-link:hover .read-more-icon {
      transform: translateX(4px);
    }
    
    /* Category navigation */
    .blog-categories {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 3rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #e9ecef;
    }
    
    .category-button {
      padding: 0.75rem 1.25rem;
      border-radius: 50px;
      background-color: #f8f9fa;
      color: #495057;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s ease;
      border: none;
      cursor: pointer;
    }
    
    .category-button:hover,
    .category-button.active {
      background-color: #7F39F8;
      color: white;
    }
    
    /* Section styling */
    .section-title-container {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-subtitle {
      color: #7F39F8;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: #212529;
    }
    
    .section-description {
      font-size: 1.1rem;
      color: #6c757d;
      max-width: 600px;
      margin: 0 auto;
    }
    
    /* Blog card hover effects */
    .blog-card::before {
      content: '';
      position: absolute;
      top: -4px;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #7F39F8 0%, #a67ffc 100%);
      transition: all 0.3s ease;
    }
    
    .blog-card:hover::before {
      height: 8px;
    }
  </style>
`;

// Function to extract first paragraph for a better preview
const getContentPreview = (htmlContent) => {
  try {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    
    // Try to find the first paragraph for a more meaningful preview
    const firstParagraph = document.querySelector('p');
    if (firstParagraph && firstParagraph.textContent) {
      const text = firstParagraph.textContent.trim();
      return text.length > 150 ? text.slice(0, 150) + '...' : text;
    }
    
    // Fallback to stripping all HTML
    return (document.body.textContent || "").slice(0, 150) + '...';
  } catch (error) {
    console.error("Error parsing HTML content:", error);
    return "";
  }
};

// Function to generate a random category for demo purposes
const getRandomCategory = (post) => {
  const categories = ['Sales Strategies', 'Lead Generation', 'Marketing Automation', 'Growth Tactics', 'Customer Success'];
  const categoryIndex = post._id.charCodeAt(0) % categories.length;
  return categories[categoryIndex];
};

async function fetchBlogPosts() {
  const res = await fetch(`${API_SERVICE_URL}/api/v1/main/blogsmanage/getallpublishedblogs/PUBLISH`, {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const BlogPage = async () => {
  const allBlog = await fetchBlogPosts();
  const blogPosts = allBlog?.data?.filter(post => post?.plainContent !== "IMAGE") || [];

  // Estimate reading time
  const calculateReadingTime = (content) => {
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
    return Math.max(1, readingTime); // Minimum 1 minute
  };
  
  // Get featured post (first post or most recent)
  const featuredPost = blogPosts.length > 0 ? blogPosts[0] : null;
  // Get remaining posts
  const regularPosts = blogPosts.length > 1 ? blogPosts.slice(1) : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Inject custom styles */}
      <div dangerouslySetInnerHTML={{ __html: typographyStyles }} />
      
      <main>
        <section className="py-5">
          <div className="container">
            <br />
            <br />
            <br />
            <div className="section-title-container">
              <h2 className="section-title">Our Latest Articles</h2>
              <p className="section-description">
                Discover actionable strategies, industry insights, and expert advice to boost your B2B sales and marketing efforts.
              </p>
            </div>
            
            {/* Blog Categories */}
            
            {/* Featured Post */}
            {featuredPost && (
              <div className="featured-post">
                <div className="blog-tags">
                  <span className="blog-tag tag-primary">Featured</span>
                  <span className="blog-tag tag-secondary">
                    {calculateReadingTime(featuredPost.content)} min read
                  </span>
                  <span className="blog-tag tag-secondary">
                    {getRandomCategory(featuredPost)}
                  </span>
                </div>
                <h3 className="featured-post-title">{featuredPost.title}</h3>
                <p className="featured-post-content">
                  {getContentPreview(featuredPost.content)}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-author mb-0">
                    By <span className="blog-author-highlight">{featuredPost.author}</span>
                  </p>
                  <a 
                    href={`/view/${featuredPost.blogPublicId}`}
                    className="btn btn-lg px-4 py-2"
                    style={{ 
                      backgroundColor: '#7F39F8', 
                      color: 'white',
                      borderRadius: '50px',
                      fontWeight: '600'
                    }}
                  >
                    Read Article <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            )}
            
            {/* Blog Grid */}
            <div className="blog-grid">
              {regularPosts.map((post) => (
                <a 
                  key={post._id}
                  href={`/view/${post.blogPublicId}`}
                  className="text-decoration-none"
                >
                  <article className="blog-card">
                    <div className="blog-card-body">
                      <div className="blog-tags">
                        <span className="blog-tag tag-secondary">
                          {calculateReadingTime(post.content)} min read
                        </span>
                      </div>
                      
                      <h4 className="blog-card-title">{post.title}</h4>
                      <p className="blog-content-preview">
                        {getContentPreview(post.content)}
                      </p>
                      
                      <div className="blog-meta">
                        <span className="blog-author">
                          By <span className="blog-author-highlight">{post.author}</span>
                        </span>
                        <span className="read-more-link">
                          Read more <i className="bi bi-arrow-right read-more-icon"></i>
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BlogPage