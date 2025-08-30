import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // for hamburger icon

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/book" className="nav-link" onClick={toggleMenu}>
                Book a Consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
