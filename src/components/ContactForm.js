import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactForm.css";


const ContactForm = () => {
    return (
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your message" />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;