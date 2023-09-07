import React from "react";
import doggacha from "../../Picture/doggacha.png";
import pokedex from "../../Picture/pokedex.png";
import blog from "../../Picture/blog.png";
import moneycalculator from "../../Picture/moneycalculator.png";

const Service = () => {
  return (
    <div className="section service" id="service">
      <div className="service-content">
        <div className="title">Service</div>
        <div className="cardList">
          <a
            href="https://dog-app-e3a64.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="service-card">
              <img src={doggacha} alt="doggcha" />
              <h4>Dog Gacha</h4>
              <div>えさを消費することで、犬の画像が表示されるガチャです。</div>
            </div>
          </a>
          <a
            href="https://main.d35b455ocegw81.amplifyapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="service-card">
              <img src={pokedex} alt="pokedex" />
              <h4>ポケモン図鑑</h4>
              <div>
                ポケモンの図鑑と検索機能が実装されています。
                <br />
                Udemyの講座をもとに自分でアレンジを加えました。
              </div>
            </div>
          </a>
          <a
            href="https://blog-c220d.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="service-card">
              <img src={blog} alt="blog" />
              <h4>ブログ</h4>
              <div>
                投稿・リプライ・削除機能を搭載したブログサービスです。 <br />
                Udemyの講座をもとに自分でアレンジを加えました。
              </div>
            </div>
          </a>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1126335503365586998&permissions=3072&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="service-card">
              <img src={moneycalculator} alt="moneycalculator" />
              <h4>MoneyCalculator</h4>
              <div>
                ユーザーごとに投稿された数字の合計値を計算するDiscordBotです。
                <br />
                友達との長期旅行でお金の割り勘のため実際に使用しました。
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
