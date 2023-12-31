// Expertise.js
import React from "react";
import "./Expertise.css";

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <h2>Expertise</h2>
      <div className="expertise-list">
        <div className="expertise-item">
          <h3>Frontend Development</h3>
          <p>Details about your frontend skills.</p>
        </div>
        <div className="expertise-item">
          <h3>Backend Development</h3>
          <p>Details about your backend skills.</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
