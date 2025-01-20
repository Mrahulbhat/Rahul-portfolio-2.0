import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <section id="experience">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Feb 2024 - Present</div>
            <div className="timeline-content">
              <h3>Core Committee member</h3>
              <p>Skill Sphere Club · Canara Engineering College</p>
              <p>
                Architect and develop a dynamic website aimed at assisting
                users in finding their ideal homes based on their preferences.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Aug 2024 - Nov 2024</div>
            <div className="timeline-content">
              <h3>Ex - SDE Intern </h3>
              <p>Entertainment Technologists · Remote</p>
              <p>
                Implemented proof of concept for an optimized resource
                management and recommendation system.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Feb 2025 - Present</div>
            <div className="timeline-content">
              <h3>SDE Intern </h3>
              <p>Riskonnect Services Pvt Ltd · On Site</p>
              <p>
                Implemented proof of concept for an optimized resource
                management and recommendation system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
