import React from "react";
import masui from "../Picture/masui.jpg";
import githubLogo from "../Picture/github-mark.svg";

const AboutMe = () => (
  <div className="section about-me" id="about-me">
    <div className="title">About Me</div>
    <div className="card">
      <img src={masui} alt="masui" />
      <div className="card-content">
        <p>
          業務系のシステム開発を行うSIerの会社に1年2か月ほど勤務し、設計・開発・テストを一通り行いました。
        </p>
        <p>Webエンジニアへの転職を目指しています。</p>
        <a
          href="https://github.com/masuyasu1225"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github" className="github-logo" />
          githubリンク
        </a>
      </div>
    </div>
  </div>
);

export default AboutMe;
