import React, { useState } from "react";
import "../css/Contact.css";
import contact from "../assets/contact.jpg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageSent(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Header />

      <div
        className="contact-section"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="contact-overlay">
          <div className="contact-content">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              We'd love to hear from you! Fill out the form and our team will
              get back to you shortly.
            </p>

            {messageSent ? (
              <div className="success-message">
                ✅ Message sent successfully! Redirecting to home...
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Subject" />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <button type="submit" className="contact-button">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
