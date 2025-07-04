import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import cec from '../../assets/cec.png'
import rk from '../../assets/rk.png'

const About = () => {
  const experienceData = [
    {
      id: 1,
      date: "Feb 2024 - Feb 2025",
      title: "Core Committee member",
      company: "Skill Sphere Club · Canara Engineering College",
      logo: cec,
      logoAlt: "Canara Engineering College"
    },
    {
      id: 2,
      date: "Feb 2025 - July 31",
      title: "SDE Intern",
      company: "Riskonnect Services Pvt Ltd",
      logo: rk,
      logoAlt: "Riskonnect Services"
    },
    {
      id: 3,
      date: "Aug 2025 - Present",
      title: "Software Engineer",
      company: "Riskonnect Services Pvt Ltd",
      logo: rk,
      logoAlt: "Riskonnect Services"
    }
  ];

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

    // Animate company logos
    gsap.fromTo(
      ".company-logo",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div id="about">
      <section id="experience">
        <h2>Experience</h2>
        <div className="timeline">
          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <div className="company-logo">
                  <img 
                    src={item.logo} 
                    alt={item.logoAlt} 
                    className="logo-img"
                  />
                </div>
                <div className="timeline-info">
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;