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
import ContactForm from "./ContactForm";

const AboutMe = () => (
  <div className="section about-me" id="about-me">
    <div className="title">About Me</div>
    <p>
      業務系のシステム開発を行うSIerの会社に1年2か月ほど勤務し、設計・開発・テストを一通り行いました。
    </p>
    <p>Webエンジニアへの転職を目指しています。</p>
    <a
      href="https://github.com/masuyasu1225"
      target="_blank"
      rel="noopener noreferrer"
    >
      github
    </a>
  </div>
);

const Skill = () => (
  <div className="section skill" id="skill">
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
    <div className="section service" id="service">
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

const Academic = () => {
  return (
    <div className="section academic" id="academic">
      <div className="academic-content">
        <div className="title">Academic</div>
        <div className="academic-card">
          <div>
            学生時代の研究では既定の温度に達すると色が消えるサーモクロミックインクと電熱回路を組み合わせたデバイスPerformEyebrowを開発していました。国際会議や論文誌に採択され、ITmediaでも取り上げられました。
          </div>
          <a
            href="https://www.itmedia.co.jp/news/articles/2112/24/news059.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            PefermEyebrow
          </a>
          <div>
            <h3>【国際会議】</h3>
            <li>
              <b>HCII2021</b> PerformEyebrow: design and implementation of an
              artificial eyebrow device enabling augmented facial expression
              <br />
              Motoyasu Masui, Yoshinari Takegawa, Nonoka Nitta, Yutaka Tokuda,
              Yuta Sugiura, Katsutoshi Masai, Keiji Hirata
            </li>
            <li>
              <b>HCII2022</b> High-Speed Thermochromism Control Method
              Integrating Water Cooling Circuits and Electric Heating Circuits
              Printed with Conductive Silver Nanoparticle Ink
              <br />
              Motoyasu Masui, Yoshinari Takegawa, Yutaka Tokuda, Yuta Sugiura,
              Katsutoshi Masai, Keiji Hirata
            </li>
            <li>
              <b>AHs</b> Dynamic Appearance Augmentation Method that Enables
              Easy Prototyping of Masks for Performance
              <br />
              Motoyasu Masui, Yoshinari Takegawa, Keiji Hirata
            </li>
          </div>
          <div>
            <h3>【論文誌】</h3>
            <li>
              <b>
                PerformEyebrow:
                装着者の感情表現を拡張できる人工眉毛形状制御デバイス
              </b>
              <br />
              増井元康, 竹川佳成, 徳田雄嵩, 杉浦裕太, 正井克俊, 平田圭二 -
              情報処理学会論文誌, 2022
            </li>
            <li>
              <b>
                水冷回路と導電性銀ナノ粒子インク印刷による電熱回路を統合した高速サーモクロミズム制御手法
              </b>
              <br />
              増井元康, 竹川佳成, 徳田雄嵩, 杉浦裕太, 正井克俊, 平田圭二 -
              情報処理学会論文誌, 2022
            </li>
            <li>
              <b>仮面劇のためのプロトタイピングが容易な動的外見拡張手法</b>
              <br />
              増井元康, 竹川佳成, 平田圭二 - 情報処理学会論文誌, 2022
            </li>
          </div>
          <div>
            <h3>【受賞】</h3>
            <li>第189回HCI研究会学生奨励賞</li>
            <li>HCI研究会貢献賞</li>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="Home">
      <AboutMe />
      <Skill />
      <Service />
      <Academic />
      <ContactForm />
    </div>
  );
};

export default Home;
