import React from "react";
import Home from "./Components/Home/Home.jsx";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer.jsx";


const App = () => {
  return (
    <div>
      <Home />
      <Skills/>
      <Footer/>
    </div>
  );
};

export default App;
