import React from "react";
import "./Home.css";
import AboutMe from "./components/body/AboutMe";
import Skill from "./components/body/Skill";
import Service from "./components/body/Service";
import Academic from "./components/body/Academic";
import ContactForm from "./components/body/ContactForm";

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
