import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false); 

  const handleDivClick = () => {
    setIsClicked(true);

    
    setTimeout(() => {
      setFormVisible(true);
    }, 1000); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;

   
    e.target.classList.add('submitting');

    
    emailjs.send(
      'service_of4kb9o',  
      'template_gdgwpc5', 
      formData,           
      'RafYDIiaJB_yVVmB1'     
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true); 
      setShowNotification(true); 
      setFormData({ name: '', email: '', message: '' }); 
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setShowNotification(true); 
    })
    .finally(() => {
      submitButton.disabled = false; 
      e.target.classList.remove('submitting'); 

    
      setTimeout(() => {
        setShowNotification(false);
      }, 5000); 
    });
  };

  return (
    <section className="contact">
      <div className="container text-center">
        <div
          className={`btn-contact ${isClicked ? "clicked" : ""}`}
          onClick={handleDivClick}
        >
          
          {!isClicked && <span>Contact Me</span>}

         
          {formVisible && (
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="row form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

      
        {showNotification && (
          <div className="notification">
            <p>{isSubmitted ? "Your message has been sent successfully!" : "Something went wrong. Please try again."}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
