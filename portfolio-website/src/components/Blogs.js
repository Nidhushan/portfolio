// Blogs.js
import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section id="blogs" className="blogs-section">
      <h2>Blogs</h2>
      <div className="blog-list">
        <div className="blog-item">
          <h3>Blog Post 1</h3>
          <p>Content of Blog Post 1.</p>
        </div>
        <div className="blog-item">
          <h3>Blog Post 2</h3>
          <p>Content of Blog Post 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
