import { useState, useEffect } from "react";
import "../Home/Home.css";
import dp from "../../assets/dp.png"; // Your profile picture
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  const [dynamicText, setDynamicText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const words = ["SDE Intern @ Riskonnect", "Aspiring Full Stack Dev"];

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const isWordComplete = !isDeleting && charIndex === currentWord.length;
      const isWordDeleted = isDeleting && charIndex === 0;

      if (isWordComplete) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isWordDeleted) {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
      } else {
        setCharIndex((prevIndex) =>
          isDeleting ? prevIndex - 1 : prevIndex + 1
        );
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing and deleting speed
    return () => clearTimeout(timer); // Cleanup timeout
  }, [charIndex, isDeleting, wordIndex, words]);

  useEffect(() => {
    setDynamicText(words[wordIndex].substring(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return (
    <div id="home-page">
      <div id="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div id="home">
        <div className="container">
          <div className="text-container">
            <h1>
              Hi, I am{" "}
              <ins
                style={{
                  color: "#bd53ed",
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                Rahul 👋
              </ins>
            </h1>

            <h2>
              SDE Intern <span style={{ color: "#bd53ed" }}>@ Riskonnect</span>{" "}
            </h2>
            <br />
            <div className="contact-container">
              <a
                href="https://www.instagram.com/rxhul_bhxt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/m-rahul-bhat-/"
                target="_blank"
                rel="noopener noreferrer"
              > 
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:rahulbhat5122@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/Mrahulbhat?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <button
              onClick={() => {
                const element = document.querySelector("#about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              See More
            </button>
          </div>

          <div className="img-container">
            <img id="profile-pic" src={dp} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
