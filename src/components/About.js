import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";
import myImage from "../assets/images/Azra.jpg"; 
import logos from "../assets/images/logos.png";
import teaching from "../assets/images/teaching.jpg";
import svrco from "../assets/images/svrco.jpg";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container">
      
        <h2 className="about-title">About Me</h2>

       
        <div className="row align-items-center">
          <div className="col-lg-7">
            <motion.p
              className="about-text"
              initial={{ x: -50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              I'm a full-stack developer from Sarajevo, passionate about frontend development. I hold a Software Development Specialist degree and I'm pursuing a Bachelor's in Electrical Engineering. I’m always improving my skills in web programming.
            </motion.p>
          </div>
          <div className="col-lg-5 text-center">
            <motion.img
              src={myImage}
              alt="Azra"
              className="about-image"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

       
        <div className="row align-items-center">
          <div className="col-lg-5 text-center">
            <motion.img
              src={logos}
              alt="Skillset"
              className="about-image"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="col-lg-7">
            <motion.p
              className="about-text"
              initial={{ x: 50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              I teach JavaScript, Web programming, and Python to elementary students at a local academy, helping them dive into coding. My experience includes internships where I worked on web applications at Sarajevo International 
              Airport using C#/.NET Framework, ReactJS, SQL Server, and ASP.NET MVC.
            </motion.p>
          </div>
        </div>

      
        <div className="row align-items-center">
          <div className="col-lg-7">
            <motion.p
              className="about-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              My skillset includes frontend and backend technologies like JavaScript, Python, C#, HTML, CSS (SCSS), ReactJS, and SQL. I've also worked with mobile app development using React Native and Kotlin, all while adhering to SOLID principles for maintainable code.
            </motion.p>
          </div>
          <div className="col-lg-5 text-center">
            <motion.img
              src={teaching}
              alt="Teaching"
              className="about-image"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

      
        <div className="row align-items-center">
          <div className="col-lg-5 text-center">
            <motion.img
              src={svrco}
              alt="Current Work"
              className="about-image"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="col-lg-7">
            <motion.p
              className="about-text"
              initial={{ x: 50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              I've been involved in exciting projects, like winning the EESTEC Challenge Hackathon in 2023. I also participate in social impact projects and workshops. Outside of work, I spend time with my sidekick cat who keeps me company while I code.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
