import { JSDOM } from 'jsdom';

import { API_SERVICE_URL } from "@/config";

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

  async function fetchBlogPosts() {
    const res = await fetch(`${API_SERVICE_URL}/api/v1/main/blogsmanage/getallpublishedblogs/PUBLISH`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

  const stripHtml = html => {
    const dom = new JSDOM(html);
    return dom.window.document.body.textContent || "";
  };
  
  
  const BlogPage = async () => {
    const allBlog = await fetchBlogPosts();
    const blogPosts = allBlog?.data;


    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <main>
            <section className="py-8">
                <div className="container">
                    <h4 className="mb-5 text-center">Today's top highlights</h4>

                    <div className="row justify-content-center">
                    <div className="col-12">
                        {blogPosts.map((post) => (
                            post?.plainContent !== "IMAGE" && (
                                <article 
                                key={post._id} 
                                className="card bg-secondary bg-opacity-50 hover:shadow-lg transition-all duration-300 p-4 mb-4"
                                >
                                <div className="card-body">
                                    {/* Tags */}
                                    <div className="d-flex gap-2 mb-3">
                                    <span className="badge bg-primary">Blog</span>
                                    <span className="badge bg-white text-dark">5 min read</span>
                                    </div>

                                    {/* Title and Content */}
                                    <h5 className="card-title mb-3">
                                    <a href={`/view/${post.blogPublicId}`} target="_blank" className="text-decoration-none text-dark hover:text-primary">
                                        {post.title}
                                    </a>
                                    </h5>
                                    <p className="text-muted mb-4">
                                    {stripHtml(post.content).slice(0, 200)}...
                                    </p>

                                    {/* Author and Read More */}
                                    <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 heading-color fw-semibold">
                                        By <span className="text-primary">{post.author}</span>
                                    </p>
                                    <a 
                                        className="btn btn-link text-primary p-0" 
                                        href={`/view/${post.blogPublicId}`}
                                        target="_blank"
                                    >
                                        Read more 
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </a>
                                    </div>
                                </div>
                                </article>
                            )
                        ))}
                    </div>
                    </div>
                </div>
                </section>
        </main>
      </>
    )
  }
  
  export default BlogPage