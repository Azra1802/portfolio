import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
       
        <div>
          <h5>Contact</h5>
          <p>Email: azradonlagic61@hotmail.com</p>
          <p>Phone: +387 60 348 7563</p>
        </div>

        
        <div>
          <h5>Follow Me</h5>
          <div className="social-links">
            <a href="https://github.com/Azra1802" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/azra-%C4%91onlagi%C4%87-786796213/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2025 Azra Đonlagić. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;