import React from "react";
import javaLogo from "../../Picture/java.svg";
import javaScriptLogo from "../../Picture/javascript.svg";
import reactLogo from "../../Picture/react.svg";
import cLanguageLogo from "../../Picture/clanguage.png";
import pythonLogo from "../../Picture/python.svg";
import postgresqlLogo from "../../Picture/postgresql.svg";
import mysqlLogo from "../../Picture/mysql.svg";
import springLogo from "../../Picture/spring.svg";

const Skill = () => (
  <div className="section skill" id="skill">
    <div className="skill-content">
      <div className="title">Skill</div>
      <div className="cardList">
        <div className="card">
          <img src={javaLogo} alt="java" />
          <div>Java</div>
          <div>経験年数：4年</div>
          <div>(大学、実務)</div>
        </div>
        <div className="card">
          <img src={javaScriptLogo} alt="javaScript" />
          <div>JavaScript</div>
          <div>経験年数：1年</div>
          <div>(独学)</div>
        </div>
        <div className="card">
          <img src={reactLogo} alt="react" />
          <div>React</div>
          <div>経験年数：1年</div>
          <div>(独学)</div>
        </div>
        <div className="card">
          <img src={cLanguageLogo} alt="clanguage" />
          <div>C</div>
          <div>経験年数：1年</div>
          <div>(大学)</div>
        </div>
        <div className="card">
          <img src={pythonLogo} alt="python" />
          <div>Python</div>
          <div>経験年数：1年</div>
          <div>(大学、独学)</div>
        </div>
        <div className="card">
          <img src={postgresqlLogo} alt="postgresql" />
          <div>PostgreSQL</div>
          <div>経験年数：1年</div>
          <div>(大学、実務)</div>
        </div>
        <div className="card">
          <img src={mysqlLogo} alt="mysql" />
          <div>MySQL</div>
          <div>経験年数：3か月</div>
          <div>(実務)</div>
        </div>
        <div className="card">
          <img src={springLogo} alt="spring" />
          <div>Spring</div>
          <div>経験年数：3か月</div>
          <div>(実務)</div>
        </div>
      </div>
    </div>
  </div>
);

export default Skill;
