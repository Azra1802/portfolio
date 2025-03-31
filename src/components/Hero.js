import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
   
    const typingTimeout = setTimeout(() => {
      setIsTypingDone(true);
    }, 4000); 

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section className="hero d-flex align-items-center">
      <div className="container text-center">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
           
            <h1 className="hero-title">
              <span className={`typing-text ${isTypingDone ? "hide-cursor" : ""}`}>
                Hi, I'm <span>Azra</span> 
              </span>
            </h1>

            
            
                <p className="hero-subtitle">
                  A full-stack developer with a love for pixels and a healthy obsession with the perfect shade of <span>purple</span>.
                </p>
              <>
                <p className="scroll-text">Scroll to see some of my work (including this one)</p>
                <div className="arrow-down">↓</div>
              </>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
