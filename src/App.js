import React, { useState, useEffect } from "react";  
import { motion } from "framer-motion";  
import './App.css';
import './styles/Header.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Contact.css';
import './styles/Projects.css';
import "./styles/Footer.css";
import Header from './components/Header.js';
import Projects from './components/Projects.js';
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";


const App = () => {
  const [bgColor, setBgColor] = useState("linear-gradient(319deg, #9400ff, #ffffff, #bc5fff)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      
      if (scrollY < 300) 
        setBgColor("linear-gradient(319deg, #9400ff, #ffffff, #bc5fff)");  
      else if (scrollY < 800) 
        setBgColor("linear-gradient(319deg, #a32bff, #ffffff, #c871ff)");  
      else if (scrollY < 1400) 
        setBgColor("linear-gradient(319deg, #b35fff, #ffffff, #d18aff)");  
      else 
        setBgColor("linear-gradient(319deg, #c48aff, #ffffff, #ddaaff)");  
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  

  return (
    <motion.div
      className="app"
      style={{
        background: bgColor,  // Koristi gradijent sa više nijansi
        transition: "background 1.5s ease-in-out"  // Usporeni prelaz za mekši efekat
      }}
    >
      <Header />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
    </motion.div>
  );
};

export default App;
