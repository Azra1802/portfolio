import React, { useState } from 'react';
import { Link } from 'react-scroll';  
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" p-3">
      <div className="container d-flex justify-content-between align-items-center">
       
        <div className="logo fs-3">
          MyPortfolio
        </div>

       
        <nav className={`navbar navbar-expand-lg navbar-light ${isMenuOpen ? 'show' : ''}`}>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="hero" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}  
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="about" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="projects" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="contact" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
