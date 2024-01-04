import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Expertise from "./components/Expertise";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <div id="projects"></div><Projects />
      <Blogs />
      <Expertise />
    </div>
  );
}

export default App;
