import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <Link to="/">ホーム</Link>
        <a href="#about-me">About Me</a>
        <a href="#skill">Skill</a>
        <a href="#service">Service</a>
        <a href="#academic">Academic</a>
        <a href="#contact-form">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
