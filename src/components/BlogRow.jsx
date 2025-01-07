// components/BlogRow.js
'use client'
import React from 'react';
import { JSDOM } from 'jsdom';
import { API_SERVICE_URL } from '@/config';

async function fetchBlogPosts() {
  const res = await fetch(`${API_SERVICE_URL}/api/v1/main/blogsmanage/getallpublishedblogs/PUBLISH`, {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

function pickRandom3(array) {
  const filteredArray = array.filter(obj => obj.blogPublicId !== 110);
  
  if (!filteredArray || filteredArray.length === 0) {
    return [];
  }
  
  if (filteredArray.length <= 3) {
    const shuffled = [...filteredArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  const shuffled = [...filteredArray];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, 3);
}

const stripHtml = html => {
  const dom = new JSDOM(html);
  return dom.window.document.body.textContent || "";
};

const BlogRow = async () => {
  const allBlog = await fetchBlogPosts();
  const blogs = pickRandom3(allBlog?.data);

  return (
    <section className="py-5">
      <div className="container">
        <h3 className="h4 mb-4 text-primary">You may also like</h3>
        
        <div className="row flex-nowrap overflow-auto pb-4 g-4">
          {blogs.map((blog, index) => (
            blog?.plainContent !== "IMAGE" && (
              <div key={index} className="col-md-4">
                <article className="card h-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="card-body">
                    <h4 className="card-title h5 mb-3">
                      <a 
                        href={`/view/${blog.blogPublicId}`}
                        target="_blank"
                        className="text-decoration-none text-primary hover:text-primary-dark stretched-link"
                      >
                        {blog.title}
                      </a>
                    </h4>
                    
                    <p className="card-text text-muted mb-3">
                      {stripHtml(blog.content).slice(0, 150)}...
                    </p>
                    
                    <div className="text-muted small">
                      {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </article>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogRow;