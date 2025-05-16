import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate timeline items
    gsap.fromTo(
      ".timeline-item",
      {
        opacity: 0,
        y: 50, // Start below the viewport
      },
      {
        opacity: 1,
        y: 0, // Move to original position
        duration: 1,
        stagger: 0.3, // Delay between each item
        scrollTrigger: {
          trigger: ".timeline", // Start animation when the timeline container is in view
          start: "top 60%", // Trigger when the top of the timeline is 60% down the viewport
          end: "bottom 40%", // End when the bottom of the timeline is 40% up the viewport
          toggleActions: "play none none reverse", // Play animation on scroll down, reverse on scroll up
        },
      }
    );
  }, []);

  return (
    <div id="about">
      <section id="experience">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Feb 2024 - Feb 2025</div>
            <div className="timeline-content">
              <h3>Core Committee member</h3>
              <p>Skill Sphere Club · Canara Engineering College</p>
              <p>
                Conducted sessions to teach problem solving and data structures
                and algorithms.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Feb 2025 - Present</div>
            <div className="timeline-content">
              <h3>SDE Intern </h3>
              <p>Riskonnect Services Pvt Ltd · On Site</p>
              <p>Part of the ClearSight R&D team, working on an enterprise-grade product built using Angular and .NET technologies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;