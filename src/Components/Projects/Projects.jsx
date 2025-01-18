import React from "react";
import "./Projects.css";

import c4p from "../../assets/c4p.png";
import spotify from "../../assets/spotify.png";
import ems from "../../assets/ems.jpg";
import cybercrime from "../../assets/cybercrime.png";
import cashbook from "../../assets/cashbook.png";
import kavoor from "../../assets/kavoor.jpg";
import sat from "../../assets/sat.png";
import bgarage from "../../assets/bgarage.png";
import sgpacalcpic from "../../assets/sgpacalcpic.jpg";
import tictactoe from "../../assets/tictactoe.jpg";
import weather from "../../assets/weather.png";




const Projects = () => {
  return (
    <div id="projects">
      <div>
        <h1>My Projects</h1>
      </div>

      <div className="projects-container">
        <div className="p-subheading">
          <p>MERN Stack | SpringBoot Projects</p>
        </div>
        <div className="projects-subcontainer">
          <img src={c4p} alt="" />
          <img src={spotify} alt="" />
          <img src={ems} alt="" />
          <img src={bgarage} alt="" />
        </div>

        <div className="p-subheading">
          <p>Personal & DBMS Mini Projects </p>
        </div>
        <div className="projects-subcontainer">
          <img src={cybercrime} alt="" />
          <img src={cashbook} alt="" />
        </div>

        <div className="p-subheading">
          <p>Personal | Practice Projects </p>
        </div>
        <div className="projects-subcontainer">
          <img src={kavoor} alt="" />
          <img src={sat} alt="" />
        </div>
        <div className="projects-subcontainer-easy">
          <img src={sgpacalcpic} alt="" />
          <img src={weather} alt="" />
          <img src={tictactoe} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Projects;
