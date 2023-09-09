import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Motoyasu Masui. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
