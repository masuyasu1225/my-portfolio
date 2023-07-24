import React from "react";
import "./Home.css";
import javaLogo from "./java.svg"; // 画像をimport

const AboutMe = () => (
  <div className="section about-me">
    <div className="title">About Me</div>
    <p>ここに自己紹介文を記載</p>
  </div>
);

const Skill = () => (
  <div className="section skill">
    <div className="title">Skill</div>
    <div className="card">
      <img src={javaLogo} alt="java" />
      <div>Java</div>
      <div>経験年数：4年</div>
    </div>
    <div className="card">JavaScript</div>
    <div className="card">C</div>
    <div className="card">Python</div>
  </div>
);

const Service = () => (
  <div className="section service">
    <div className="title">Service</div>
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
