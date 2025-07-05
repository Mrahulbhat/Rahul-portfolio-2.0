import React, { useState, useEffect } from "react";
import dp from "../../../src/assets/dp.png";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home-page">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Cursor follower */}
      <div
        className="cursor-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>

      <div id="navbar">
        <h1 className="logo">My Portfolio</h1>
        <ul>
          <li>
            <a href="#home" className="nav-link">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              <span>Projects</span>
            </a>
          </li>
        </ul>
      </div>

      <div id="home">
        <div className={`container ${isVisible ? "fade-in" : ""}`}>
          <div className="text-container">
            <div className="greeting">
              <h1 className="main-title">
                Hi, I am <span className="name-highlight">Rahul</span>
                <span className="wave">👋</span>
              </h1>
            </div>

            <h2 className="subtitle">
              <span className="role">Software Engineer</span>
              <span className="company"> @ Riskonnect</span>
            </h2>

            <div className="contact-container">
              <a
                href="https://www.instagram.com/rxhul_bhxt/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
                <span className="tooltip">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/m-rahul-bhat-/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
                <span className="tooltip">LinkedIn</span>
              </a>
              <a
                href="mailto:rahulbhat5122@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link email"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
                <span className="tooltip">Email</span>
              </a>
              <a
                href="https://github.com/Mrahulbhat?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
                <span className="tooltip">GitHub</span>
              </a>
            </div>

            <button
              className="cta-button"
              onClick={() => scrollToSection("#about")}
            >
              <span>Explore My Work</span>
              <i className="fas fa-arrow-down"></i>
            </button>
          </div>

          <div className="img-container">
            <div className="profile-wrapper">
              <div className="profile-ring"></div>
              <img id="profile-pic" src={dp} alt="Rahul - Software Developer" />
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a0b2e 50%,
            #16213e 100%
          );
          overflow-x: hidden;
        }

        #home-page {
          min-height: 100vh;
          position: relative;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a0b2e 50%,
            #16213e 100%
          );
        }

        /* Background animations */
        .bg-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            rgba(189, 83, 237, 0.1),
            rgba(70, 138, 247, 0.1)
          );
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: -5%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Cursor follower */
        .cursor-follower {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(
            circle,
            rgba(189, 83, 237, 0.3),
            transparent
          );
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: all 0.1s ease;
          z-index: 9999;
        }

        /* Enhanced Navbar */
        #navbar {
          width: 100vw;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          position: fixed;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 8vh;
          z-index: 1000;
          padding: 0 5vw;
          border-bottom: 1px solid rgba(189, 83, 237, 0.2);
          transition: all 0.3s ease;
        }

        .logo {
          background: linear-gradient(45deg, #b068d2, #b61ffc, #468af7);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.5px;
        }

        #navbar ul {
          display: flex;
          justify-content: space-evenly;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        #navbar li {
          list-style: none;
        }

        .nav-link {
          font-weight: 600;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: white;
        }

        /* Enhanced Home Section */
        #home {
          padding: 8vh 0;
          min-height: 100vh;
          position: relative;
          z-index: 2;
        }

        .container {
          padding: 2rem;
          margin-top: 15vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 60vh;
          width: 90%;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .container.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .text-container {
          color: white;
          width: 55%;
          animation: slideInLeft 0.8s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .greeting {
          margin-bottom: 1.5rem;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }

        .name-highlight {
          background: linear-gradient(45deg, #b068d2, #b61ffc, #468af7);
          background-clip: text;
          text-decoration:none;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .name-highlight::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(45deg, #b068d2, #b61ffc, #468af7);
          animation: underlineGlow 2s ease-in-out infinite alternate;
        }

        @keyframes underlineGlow {
          0% {
            box-shadow: 0 0 5px rgba(189, 83, 237, 0.5);
          }
          100% {
            box-shadow: 0 0 20px rgba(189, 83, 237, 0.8);
          }
        }

        .wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
          margin-left: 0.5rem;
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }

        .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .role {
          font-weight: 700;
        }

        .company {
          background: linear-gradient(45deg, #b068d2, #468af7);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
        }

        .description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        /* Enhanced Social Links */
        .contact-container {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .social-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: white;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          transform: translateY(-8px) scale(1.1);
          background: rgba(189, 83, 237, 0.2);
          border-color: rgba(189, 83, 237, 0.5);
          box-shadow: 0 10px 30px rgba(189, 83, 237, 0.3);
        }

        .tooltip {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }

        .social-link:hover .tooltip {
          opacity: 1;
        }

        /* Enhanced CTA Button */
        .cta-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          background: linear-gradient(45deg, #9d2fcf, #1352b9);
          border: none;
          border-radius: 50px;
          padding: 1rem 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(157, 47, 207, 0.3);
          overflow: hidden;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.3s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(157, 47, 207, 0.4);
        }

        .cta-button i {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }

        /* Enhanced Profile Image */
        .img-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 45%;
          animation: slideInRight 0.8s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .profile-wrapper {
          position: relative;
          width: 400px;
          height: 400px;
        }

       .profile-ring {
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border: 1px solid transparent;
          border-radius: 50%;
          background: linear-gradient(45deg, #b068d2, #b61ffc, #468af7);
          background-clip: padding-box;
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        #profile-pic {
          width: 1000%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .profile-glow {
          position: absolute;
          top: -30px;
          left: -30px;
          right: -30px;
          bottom: -30px;
          background: radial-gradient(
            circle,
            rgba(189, 83, 237, 0.3),
            transparent
          );
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .main-title {
            font-size: 3rem;
          }

          .container {
            width: 95%;
            margin-top: 12vh;
          }

          .profile-wrapper {
            width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          #navbar {
            height: auto;
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
          }

              .description {
          display:none
            font-size: 1rem;
          }

          #navbar h1{
            display:none;
          }

          .logo {
            font-size: 1.5rem;
          }

          #navbar ul {
            gap: 1rem;
          }

          .nav-link {
            font-size: 0.9rem;
            padding: 0.4rem 0.8rem;
          }

          .container {
            flex-direction: column-reverse;
            text-align: center;
            margin-top: 10vh;
            gap: 3rem;
          }

          .text-container {
            width: 100%;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.5rem;
          }

          .img-container {
            width: 80%;
          }

          .profile-wrapper {
            width: 10vh;
            height: 10vw;
          }

          .contact-container {
            justify-content: center;
          }

          .social-link {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
          }

          .cta-button {
            margin: 0 auto;
          }

          .floating-orb {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .description {
          display:none
            font-size: 1rem;
          }

          .profile-wrapper {
            width: 240px;
            height: 240px;
          }

          .social-link {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }

          .contact-container {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
