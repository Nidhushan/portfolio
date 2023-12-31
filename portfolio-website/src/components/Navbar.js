// Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <img src="./components/logo.svg"></img>
        <a href="#profile">Profile</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#expertise">Expertise</a>
      </div>
    </nav>
  );
};

export default Navbar;
