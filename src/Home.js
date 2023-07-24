import React from "react";
import "./Home.css";
import javaLogo from "./Picture/java.svg"; // 画像をimport
import javaScriptLogo from "./Picture/javascript.svg"; // 画像をimport
import reactLogo from "./Picture/react.svg"; // 画像をimport
import cLanguageLogo from "./Picture/clanguage.png"; // 画像をimport
import pythonLogo from "./Picture/python.svg"; // 画像をimport

const AboutMe = () => (
  <div className="section about-me">
    <div className="title">About Me</div>
    <p>ここに自己紹介文を記載</p>
  </div>
);

const Skill = () => (
  <div className="section skill">
    <div className="skill-content">
      <div className="title">Skill</div>
      <div className="cardList">
        <div className="card">
          <img src={javaLogo} alt="java" />
          <div>Java</div>
          <div>経験年数：4年</div>
        </div>
        <div className="card">
          <img src={javaScriptLogo} alt="javaScript" />
          <div>JavaScript</div>
          <div>経験年数：1年</div>
        </div>
        <div className="card">
          <img src={reactLogo} alt="react" />
          <div>React</div>
          <div>経験年数：1年</div>
        </div>
        <div className="card">
          <img src={cLanguageLogo} alt="clanguage" />
          <div>C</div>
          <div>経験年数：1年</div>
        </div>
        <div className="card">
          <img src={pythonLogo} alt="python" />
          <div>React</div>
          <div>経験年数：1年</div>
        </div>
      </div>
    </div>
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
