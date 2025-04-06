// import React from "react";
import "./Projects.css";

import c4p from "../../assets/c4p.png";
import spotify from "../../assets/spotify.jpg";
import ems from "../../assets/ems.jpg";
import cybercrime from "../../assets/cybercrime.png";
import cashbook from "../../assets/cashbook.png";
import kavoor from "../../assets/kavoor.jpg";
import sgpacalcpic from "../../assets/sgpacalcpic.jpg";
import tictactoe from "../../assets/tictactoe.jpg";
import weather from "../../assets/weather.png";

const projectDetails = [
  { src: c4p, title: "Code4Placements", description: "Designed a coding platform to track my coding and placement preparation." },
  { src: spotify, title: "Indian Music Genre Classification", description: "My Final Year Machine Learning Project using MERN Stack & FLASK"},
  // { src: bgarage, title: "Vehicle Maintenance App", description: "Personal vehicle maintenance tracker using the MERN stack." },
  { src: cybercrime, title: "Cyber Crime Tracker", description: "A PHP based DBMS mini-project for tracking cybercrime incidents." },
  { src: cashbook, title: "Cashbook", description: "A personal cashbook application made using PHP." },
  { src: ems, title: "Employee Management System", description: "Made using React Js and Spring Boot to manage employee records." },
  { src: kavoor, title: "Kavoor Temple Website", description: "SOP Activity Project made using React JS + Tailwind CSS." },
  // { src: sat, title: "SAT Prep App", description: "Conducted a workshop and built their school website and made studets build this" },
];

const smallprojects = [
  { src: sgpacalcpic, title: "SGPA Calculator", description: "Android app made using Kotlin and Android Studio." },
  { src: weather, title: "Weather App", description: "Javascript practice project" },
  { src: tictactoe, title: "Tic Tac Toe", description: "JavaScript Practice Project." },
];

const Projects = () => {
  return (
    <div id="projects">
      <div>
        <h1>My Projects</h1>
      </div>

      <div className="projects-container">
        {projectDetails.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.src} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="small-projects-container">
        {smallprojects.map((project, index) => (
          <div className="small-project-card" key={index}>
            <img src={project.src} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
