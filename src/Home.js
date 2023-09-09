import React from "react";
import "./Home.css";
import Profile from "./components/body/Profile";
import Skill from "./components/body/Skill";
import Service from "./components/body/Service";
import ContactForm from "./components/body/ContactForm";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <Service />
      <Skill />
      <ContactForm />
    </div>
  );
};

export default Home;
