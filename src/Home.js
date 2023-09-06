import React from "react";
import "./Home.css";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Service from "./components/Service";
import Academic from "./components/Academic";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div className="Home">
      <AboutMe />
      <Service />
      <Skill />
      <Academic />
      <ContactForm />
    </div>
  );
};

export default Home;
