import React from "react";
import "./Home.css";

const AboutMe = () => (
  <div className="section about-me">
    <h2>About Me</h2>
    <p>ここに自己紹介文を記載</p>
  </div>
);

const Skill = () => (
  <div className="section skill">
    <h2>Skill</h2>
    <p>ここにスキルを記載</p>
  </div>
);

const Service = () => (
  <div className="section service">
    <h2>Service</h2>
    <p>ここに提供するサービスを記載</p>
  </div>
);

const Home = () => {
  return (
    <div className="Home">
      <AboutMe />
      <Skill />
      <Service />
    </div>
  );
};

export default Home;
