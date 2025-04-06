import { useState, useEffect } from "react";
import Home from "./Components/Home/Home.jsx";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import About from "./Components/About/About.jsx";
import dp from "./assets/dp.png"; // Your profile picture

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Hide preloader after 2 seconds
    }, 4000);

    return () => clearTimeout(loadingTimeout); // Cleanup timeout
  }, []);

  if (isLoading) {
    // Show preloader while loading
    return (
      <div id="preloader">
        <div className="blinking-icon">
          <img src={dp} alt="Loading Icon" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
