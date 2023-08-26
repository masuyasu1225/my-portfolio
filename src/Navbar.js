import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <>
        <Link to="/">ホーム</Link>
        <a href="#about-me">About Me</a>
        <a href="#skill">Skill</a>
        <a href="#service">Service</a>
        <a href="#academic">Academic</a>
        <a href="#contact-form">Contact</a>
      </>
    </nav>
  );
};

export default Navbar;
