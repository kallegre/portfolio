import React from "react";
import "./css/Skills.css";
import ReactLogo from "./assets/react-logo.svg";
import JavaScriptLogo from "./assets/javascript-logo.svg";
import CssLogo from "./assets/css-logo.svg";
import HtmlLogo from "./assets/html-logo.svg";
import NodeLogo from "./assets/node-logo.svg";
import PythonLogo from "./assets/python-logo.svg";
import CppLogo from "./assets/cpp-logo.svg";

const Skills = () => {
  return (
    <div id="skills-section">
      <div className="skills-title">Skills</div>
      <div className="skills-list">
        <div className="skills">
          <img src={ReactLogo} alt="react-logo" />
          React
        </div>
        <div className="skills">
          <img src={JavaScriptLogo} alt="javascript-logo" />
          JavaScript
        </div>
        <div className="skills">
          <img src={HtmlLogo} alt="html-logo" />
          HTML
        </div>
        <div className="skills">
          <img src={CssLogo} alt="css-logo" />
          CSS
        </div>
        <div className="skills">
          <img src={CppLogo} alt="cpp-logo" />
          C++
        </div>
        <div className="skills">
          <img src={PythonLogo} alt="python-logo" />
          Python
        </div>
        <div className="skills">
          <img src={NodeLogo} alt="node-logo" />
          Node.js
        </div>
      </div>
    </div>
  );
};

export default Skills;
