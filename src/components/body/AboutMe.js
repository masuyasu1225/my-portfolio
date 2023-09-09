import React from "react";
import masui from "../../Picture/masui.jpg";
import githubLogo from "../../Picture/github-mark.svg";

const AboutMe = () => (
  <div className="section about-me" id="about-me">
    <div className="title">About Me</div>
    <div className="card">
      <img src={masui} alt="masui" />
      <div className="card-content">
        <h1>
          増井 元康 <br />
          (Motoyasu Masui)
        </h1>
        <li>業務系のシステム開発を行うSIerの会社に1年2か月ほど勤務</li>
        <li> 設計・開発・テストを一通り経験</li>
        <li>Webエンジニアへの転職を目指し勉強中</li>
        <li>
          <a
            href="https://github.com/masuyasu1225"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={githubLogo} alt="github" className="github-logo" /> */}
            githubリンク
          </a>
        </li>

        <div>
          <h3>出身：北海道札幌市</h3>
        </div>
        <div>
          <h3>生年月日：1997年12月25日</h3>
        </div>
        <div>
          <h3>最終学歴：公立はこだて未来大学大学院</h3>
        </div>
        <div>
          <h3>学生時代の研究：人の表情を操作するデバイスの研究</h3>
          <li>
            既定の温度に達すると色が消えるサーモクロミックインクと電熱回路を組み合わせ眉毛を変化させることができる眼鏡型デバイス、
            <a
              href="https://www.itmedia.co.jp/news/articles/2112/24/news059.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              PerformEyebrow
            </a>
            を開発
          </li>
          <li>2022年情報処理学会論文誌へ採録</li>
          <li>国際会議 (査読有) ：HCI2021, HCI2022, AHs2022</li>
          <li>第189回HCI研究会学生奨励賞, HCI研究会貢献賞受賞</li>
        </div>
        <div>
          <h3>趣味：筋トレ, ゲーム, 楽器演奏, 旅行, 野球観戦</h3>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
