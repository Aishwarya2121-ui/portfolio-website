import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      demo: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      tech: ['React', 'Firebase', 'Material-UI'],
      image: '✓',
      demo: '#',
      github: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for creating and managing portfolio websites.',
      tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
      image: '📝',
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.github} className="project-link">
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;