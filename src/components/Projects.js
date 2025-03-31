import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";
import project1 from "../assets/images/Azra.jpg";


const projects = [
  {
    title: "Biom - Eco Products Website",
    images: [
      require("../assets/images/project1.JPG"),
      require("../assets/images/project12.JPG"),
      require("../assets/images/project13.JPG"),
      require("../assets/images/project14.JPG"),
      require("../assets/images/project15.JPG"),
      require("../assets/images/project16.JPG"),
      require("../assets/images/project17.JPG")
    ], 
    description: "A modern, minimalist website for eco-friendly products, developed as part of my final thesis at university.",
    techStack: ["HTML", "CSS", "JavaScript"],
    details: `This project was developed as part of my final thesis at university.\n
It is a modern, minimalist website for eco-friendly products called "Biom".\n
The site is designed with a focus on aesthetics, user experience, and functionality, using:\n
- HTML for structure\n
- CSS for styling and animations\n
- JavaScript for interactive elements\n
\n
Key Features & Sections:\n
- Navigation Menu: A fixed header with a logo and simple navigation links.\n
- Hero Section: A large background image with a headline and a call-to-action button.\n
- Image Slider: Rotating images showcasing different uses of the products.\n
- Product Section: A grid layout displaying product cards with images and descriptions.\n
- Animations & Hover Effects: Smooth CSS transitions, especially on images and buttons.\n
- Contact & Footer: A section with company details, social media links, and a newsletter subscription form.\n
\n
Additional Features:\n
- Integration of Google Fonts and custom typography.\n
- Responsive design optimized for different screen sizes.\n
- CSS hover effects to enhance interactivity.\n
- JavaScript functionalities for dynamic elements like sliders and hover effects.\n
\n
This project demonstrates my skills in front-end web development, focusing on clean design, responsiveness, and user-friendly interaction.`,
sourceCode: "https://github.com/Azra1802/Industrijska_praksa", 
    liveDemo: "https://azra1802.github.io/Industrijska_praksa/" 
  },
  {
    title: "Blue Sky Apartments",
    images: [
      require("../assets/images/project2.JPG"),
      require("../assets/images/project22.JPG"),
      require("../assets/images/project23.JPG"),
      require("../assets/images/project24.JPG"),
      require("../assets/images/project25.JPG"),
      require("../assets/images/project26.JPG"),
      require("../assets/images/project27.JPG")
    ], 
    description: "A modern apartment booking platform with real-time availability checks, automated price calculations, and a seamless user experience.",  
    description: "A modern apartment booking platform with real-time availability checks, automated price calculations, and a seamless user experience.",  
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB"],  
    details: `Blue Sky Apartments is a full-stack web application designed to simplify apartment reservations. It features a clean and intuitive UI, real-time availability checks, and a dynamic price calculation system, ensuring a transparent and smooth booking experience.\n
    \n
    The backend, powered by Node.js and Express.js, handles user authentication, reservation management, and secure API endpoints. MongoDB serves as the database, storing user data, bookings, and apartment details, while ensuring scalability and performance. The admin panel enables efficient management of reservations, users, and apartment listings.\n
    \n
    Key features include:\n
    - <strong>Interactive Booking Form:</strong> A modern, easy-to-use form with real-time validation.\n
    - <strong>Live Availability Checks:</strong> Ensures users can only book available apartments.\n
    - <strong>Dynamic Price Calculation:</strong> Automatically adjusts total cost based on stay duration and room type.\n
    - <strong>Email Notifications:</strong> Automatic confirmation emails for successful bookings.\n
    - <strong>Mobile-Optimized Design:</strong> Fully responsive layout for seamless experience on all devices.\n
    - <strong>Performance Optimization:</strong> Efficient database queries and caching for faster load times.\n
    \n
    This project showcases my expertise in <strong>full-stack development</strong>, including front-end design, backend architecture, and database management, with a focus on security, performance, and an excellent user experience.\n`,
    sourceCode: "https://github.com/Azra1802/Industrijska_praksa", // Stavi pravi GitHub link
    liveDemo: "https://azra1802.github.io/Industrijska_praksa/" // Stavi pravi live demo link
  },
  {
    title: "Portfolio (this one)",
    images: [
      require("../assets/images/portfolio.JPG")
    ], 
    description: "A personal portfolio website designed to showcase my projects, skills, and experience in an interactive way.",
    techStack: ["React", "JavaScript", "CSS", "Bootstrap"],
    details: `This portfolio serves as a centralized hub for my work, built to demonstrate my front-end development skills and provide an engaging experience for visitors.\n
    \n
    The project was developed using React for a dynamic and component-based structure, while Framer Motion enhances the user experience with smooth animations and transitions. The design follows a modern and responsive approach, ensuring seamless display on all devices.\n
    \n
    Key features include:\n
    - <strong>Interactive UI:</strong> Smooth animations and transitions for a seamless experience.\n
    - <strong>Project Showcase:</strong> A detailed presentation of my projects with images, descriptions, and live demo links.\n
    - <strong>Responsive Design:</strong> Fully optimized for desktop, tablet, and mobile views.\n
    - <strong>Dynamic Image Gallery:</strong> Clickable project cards with a modal image gallery.\n
    - <strong>Framer Motion Animations:</strong> Enhanced UX with subtle animations and page transitions.\n
    - <strong>Easy Navigation:</strong> A clean layout with intuitive navigation.\n
    \n
    This project highlights my expertise in <strong>React development</strong>, focusing on performance, responsiveness, and user-friendly interactions.`,
    sourceCode: "https://github.com/Azra1802/portfolio", // Replace with your actual GitHub repo link
    liveDemo: "https://azra1802.github.io/portfolio/" 
  },
  ];
  

  const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const openModal = (project) => {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
    };
  
    const nextImage = () => {
      if (selectedProject) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex + 1 < selectedProject.images.length ? prevIndex + 1 : 0
        );
      }
    };
  
    const prevImage = () => {
      if (selectedProject) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex - 1 >= 0 ? prevIndex - 1 : selectedProject.images.length - 1
        );
      }
    };
  
    return (
      <section className="projects">
        <h2 className="projects-title">My Projects</h2>
  
        <div className="projects-wrapper">
          <div className="projects-scroll">
            {projects.map((project, index) => (
              <div
                className="project-card"
                key={index}
                onClick={() => openModal(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
  
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span className="tech-badge" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Modal sa Slideshow-om */}
        <Modal show={isModalOpen} onHide={closeModal} centered size='xl'>
  <Modal.Header closeButton>
    <Modal.Title>{selectedProject?.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* Slideshow sa animacijom */}
    {/* Slideshow sa animacijom */}
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevImage}>❮</button>

        {/* ✨ Animirana slika */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={selectedProject?.images[currentImageIndex]}
            alt={`Project ${currentImageIndex + 1}`}
            className="modal-gallery-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        <button className="carousel-btn right" onClick={nextImage}>❯</button>

        {/* 🎯 Indikatori unutar carousel-container */}
        <div className="carousel-indicators">
          {selectedProject?.images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImageIndex === index ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
      </div>


    {/* Tech Stack */}
    <div className="tech-stack-container">
  {selectedProject?.techStack.map((tech, index) => (
    <div key={index} className="tech-card">
      <h4>{tech}</h4>
    </div>
  ))}
</div>

    {/* Source Code & Live Demo */}
    <div className="project-links">
      {selectedProject?.sourceCode && (
        <a 
          href={selectedProject.sourceCode} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          Source Code
        </a>
      )}
      {selectedProject?.liveDemo && (
        <a 
          href={selectedProject.liveDemo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-success"
        >
          Live Demo
        </a>
      )}
    </div>

    {/* Opis projekta */}
    <div className="project-description">
  {selectedProject?.details.split("\n").map((paragraph, index) => (
    paragraph.trim() && (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    )
  ))}
</div>



  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={closeModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>


      </section>
    );
  };
  
  export default Projects;




