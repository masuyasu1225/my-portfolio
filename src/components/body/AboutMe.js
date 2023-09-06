import React from "react";
import masui from "../../Picture/masui.jpg";
import githubLogo from "../../Picture/github-mark.svg";

const AboutMe = () => (
  <div className="section about-me" id="about-me">
    <div className="title">About Me</div>
    <div className="card">
      <img src={masui} alt="masui" />
      <div className="card-content">
        <h1>増井 元康 (Motoyasu Masui)</h1>
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

        <div>
          <h3>出身</h3>
          <li>北海道札幌市</li>
        </div>
        <div>
          <h3>大学時代の研究</h3>
          <li>
            <a
              href="https://www.itmedia.co.jp/news/articles/2112/24/news059.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              研究リンク
            </a>
          </li>
          <></>
          <li>国際会議：AHs2022</li>
        </div>
        <div>
          <h3>趣味</h3>
          <li>筋トレ</li>
          <li>ゲーム</li>
          <li>楽器演奏</li>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
