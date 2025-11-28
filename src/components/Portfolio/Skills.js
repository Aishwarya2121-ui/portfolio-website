import React from 'react';
import { Code, Palette, Database, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <Code />, level: 90 },
    { name: 'JavaScript', icon: <Zap />, level: 85 },
    { name: 'UI/UX Design', icon: <Palette />, level: 80 },
    { name: 'Node.js', icon: <Database />, level: 75 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;