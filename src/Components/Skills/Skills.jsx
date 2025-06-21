import React, { useEffect, useRef } from "react";
import "./Skills.css";

import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import java from "../../assets/java.svg";
import react from "../../assets/react.svg";
import node from "../../assets/node.svg";
import mongodb from "../../assets/mongodb.svg";
import express from "../../assets/express.svg";
import angular from "../../assets/angular-icon.svg";
import tailwind from "../../assets/tailwind.svg";
import typescript from "../../assets/typescript.svg";
import playwright from "../../assets/playwright.svg";

const Skills = () => {
  const skillsRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Observe each card
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Add staggered delay
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el, index) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  const skillsData = [
    { img: html, name: "Html" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: typescript, name: "TypeScript" },
    { img: java, name: "Java" },
    { img: react, name: "React.js" },
    { img: angular, name: "Angular" },
    { img: node, name: "Node.js" },
    { img: express, name: "Express.js" },
    { img: mongodb, name: "MongoDB" },
    { img: tailwind, name: "Tailwind" },
    { img: playwright, name: "Playwright" }
  ];

  return (
    <div id="skills" ref={skillsRef}>
      <div>
        <h1 ref={titleRef} className="skills-title">Skills | Tech Stack</h1>
        <div className="skills-container" ref={containerRef}>
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name}
              className="card" 
              ref={(el) => addToRefs(el, index)}
            >
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;