import React from "react";
import { SkillsInfo } from "../../constants.js";
import "./Skills.css";

const Skills = () => (
  <section id="skills" className="skills-section">
    {/* Section Title */}
    <div className="skills-header">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-underline"></div>
    </div>
    
    {/* Skill Categories */}
    <div className="skills-container">
      {SkillsInfo.map((category) => (
        <div key={category.title} className="skill-category">
          <h3 className="category-title">
            {category.title}
          </h3>
          
          {/* Skill Items - 3 per row on larger screens */}
          <div className="skills-grid">
            {category.skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                />
                <span className="skill-name">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);;

export default Skills;