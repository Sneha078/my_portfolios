import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <h1 className="logo">Sneha Gurung</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="mode-toggle"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Frontend Developer</h2>
          <p>Crafting digital experiences with care and precision</p>
          <div className="teal-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h3>About Me</h3>
        <p>
          I'm a passionate developer specializing in modern web technologies. 
          With a focus on clean code and user-centric design, I build websites 
          that make an impact.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h3>Featured Work</h3>
        <div className="project-grid">
          {[1, 2, 3].map((project) => (
            <div key={project} className="project-card">
              <div className="teal-overlay"></div>
              <h4>Project {project}</h4>
              <p>Description of project highlights and technologies used</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h3>Let's Connect</h3>
        <div className="contact-links">
          <a href="mailto:you@example.com" className="teal-link">Email</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="teal-link">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="teal-link">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Built with React and 💙</p>
      </footer>
    </div>
  );
};

export default App;