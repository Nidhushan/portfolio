// Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-links">
        <img src="./components/logo.svg"/>
        <a href="#profile">Profile</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#expertise">Expertise</a>
      </div>
    </nav>
  );
};

export default Navbar;
