import "react";
import "./Skills.css";

import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import java from "../../assets/java.svg";
import react from "../../assets/react.svg";
import c from "../../assets/c.svg";
import node from "../../assets/node.svg";
import mongodb from "../../assets/mongodb.svg";
import express from "../../assets/express.svg";
import postman from "../../assets/postman.svg";
import mysql from "../../assets/mysql.svg";
// import spring from "../../assets/spring.svg";
// import c_sharp from "../../assets/c-sharp.svg"
import angular from "../../assets/angular-icon.svg"
import bootstrap from "../../assets/bootstrap.svg";
import tailwind from "../../assets/tailwind.svg";
// import php from "../../assets/php.svg";
import typescript from "../../assets/typescript.svg";
// import hibernate from "../../assets/hibernate.svg";
import playwright from "../../assets/playwright.svg";

const Skills = () => {
  return (
    <div id="skills">
      <div>
        <h1>Skills | Tech Stack </h1>
        <div className="skills-container">
          <div className="card">
            <img src={html} alt="" />
            <p>Html</p>
          </div>
          <div className="card">
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div className="card">
            <img src={js} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="card">
            <img src={typescript} alt="" />
            <p>TypeScript</p>
          </div>
          <div className="card">
            <img src={java} alt="" />
            <p>Java</p>
          </div>
          <div className="card">
            <img src={c} alt="" />
            <p>C Language</p>
          </div>
          {/* <div className="card">
            <img src={c_sharp} alt="" />
            <p>C Sharp</p>
          </div> */}
          <div className="card">
            <img src={react} alt="" />
            <p>React.js</p>
          </div>
          <div className="card">
            <img src={angular} alt="" />
            <p>Angular</p>
          </div>
          <div className="card">
            <img src={node} alt="" />
            <p>Node.js</p>
          </div>
          <div className="card">
            <img src={express} alt="" />
            <p>Express.js</p>
          </div>
          <div className="card">
            <img src={mongodb} alt="" />
            <p>MongoDB</p>
          </div>
          {/* <div className="card">
            <img src={spring} alt="" />
            <p>Spring Boot</p>
          </div> */}
          <div className="card">
            <img src={postman} alt="" />
            <p>Postman API</p>
          </div>
          <div className="card">
            <img src={mysql} alt="" />
            <p>MySQL</p>
          </div>
          <div className="card">
            <img src={bootstrap} alt="" />
            <p>Bootstrap</p>
          </div>
          <div className="card">
            <img src={tailwind} alt="" />
            <p>Tailwind</p>
          </div>
          <div className="card">
            <img src={playwright} alt="" />
            <p>Playwright</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
