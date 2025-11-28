import React from 'react';
import { Github, Linkedin, Twitter, Download } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Hero = () => {
  const { state } = useAuth();

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{state.user?.name || 'John Doe'}</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I craft beautiful and functional web experiences. Passionate about 
              creating intuitive user interfaces and scalable applications.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <Download size={18} />
                Download Resume
              </button>
              <button className="btn btn-secondary">View Projects</button>
            </div>

            <div className="social-links">
              <a href="#" className="social-link"><Github size={24} /></a>
              <a href="#" className="social-link"><Linkedin size={24} /></a>
              <a href="#" className="social-link"><Twitter size={24} /></a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;