import React from "react";
import "./Home.css";
import javaLogo from "./Picture/java.svg";
import javaScriptLogo from "./Picture/javascript.svg";
import reactLogo from "./Picture/react.svg";
import cLanguageLogo from "./Picture/clanguage.png";
import pythonLogo from "./Picture/python.svg";
import springLogo from "./Picture/spring.svg";
import postgresqlLogo from "./Picture/postgresql.svg";
import mysqlLogo from "./Picture/mysql.svg";
import blog from "./Picture/blog.png";
import doggacha from "./Picture/doggacha.png";
import moneycalculator from "./Picture/moneycalculator.png";
import pokedex from "./Picture/pokedex.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => (
  <div className="section about-me">
    <div className="title">About Me</div>
    <p>
      業務系のシステム開発を行うSIerの会社に1年2か月ほど勤務し、設計・開発・テストを一通り行いました。
    </p>
    <p>Webエンジニアへの転職を目指しています。</p>
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
          <div>Python</div>
          <div>経験年数：1年</div>
        </div>
        <div className="card">
          <img src={postgresqlLogo} alt="postgresql" />
          <div>PostgreSQL</div>
          <div>経験年数：1年</div>
        </div>
        <div className="card">
          <img src={mysqlLogo} alt="mysql" />
          <div>MySQL</div>
          <div>経験年数：3か月</div>
        </div>
        <div className="card">
          <img src={springLogo} alt="spring" />
          <div>MySQL</div>
          <div>経験年数：3か月</div>
        </div>
      </div>
    </div>
  </div>
);

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="section service">
      <div className="service-content">
        <div className="title">Service</div>
        <Slider {...settings}>
          <div className="service-card">
            <a
              href="https://dog-app-e3a64.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={doggacha} alt="doggcha" />
              <h4>Dog Gacha</h4>
              <div>犬のガチャ</div>
            </a>
          </div>
          <div className="service-card">
            <a
              href="https://main.d35b455ocegw81.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pokedex} alt="pokedex" />
              <h4>ポケモン図鑑</h4>
              <div>ポケモンの図鑑</div>
            </a>
          </div>
          <div className="service-card">
            <a
              href="https://blog-c220d.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={blog} alt="blog" />
              <h4>ブログ</h4>
              <div>ブログです</div>
            </a>
          </div>
          {/* <div classNae="service-card"> */}
          <div className="service-card">
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=1126335503365586998&permissions=3072&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={moneycalculator} alt="moneycalculator" />
              <h4>MoneyCalculator</h4>
              <div>数字の計算ができます</div>
            </a>
          </div>
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
};

const Academic = () => (
  <div className="section academic">
    <div className="academic-content">
      <div className="title">Academic</div>
      <div className="academic-card">
        <a
          href="https://www.itmedia.co.jp/news/articles/2112/24/news059.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          PefermEyebrow
        </a>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="Home">
      <AboutMe />
      <Skill />
      <Service />
      <Academic />
    </div>
  );
};

export default Home;
