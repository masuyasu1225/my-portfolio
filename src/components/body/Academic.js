import React from "react";
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
export default Academic;
