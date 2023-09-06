import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-links">
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#terms">Terms of Service</a>
        </li>
        <li>
          <a href="#privacy">Privacy Policy</a>
        </li>
      </ul>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Motoyasu Masui. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
