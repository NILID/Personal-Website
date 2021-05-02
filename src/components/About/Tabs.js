import React, { useState } from "react";
import "./Tabs.scss";

import react from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import redux from "../../assets/redux.svg";
import node from "../../assets/nodejs.svg";
import mongo from "../../assets/mongodb.svg";
import sass from "../../assets/sass.svg";
import html from "../../assets/html5.svg";
import css from "../../assets/css-5.svg";

function Tabs() {
  const [tab, setTab] = useState(1);

  const displayTab = (index) => setTab(index);

  return (
    <div className="tab-container">
      <div className="tab-label">
        <h4
          className={tab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            setTab(1);
          }}
        >
          Skills
        </h4>
        <h4
          className={tab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            setTab(2);
          }}
        >
          Experience
        </h4>
        <h4
          className={tab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => {
            setTab(3);
          }}
        >
          Education
        </h4>
      </div>

      <div className="tab-content">
        <div className={tab === 1 ? "content active-tab" : "content"}>
          <div className="icons-grid">
            <div>
              <img src={react} alt="" />
              <p>ReactJS</p>
            </div>
            <div>
              <img src={javascript} alt="" />
              <p>Javascript</p>
            </div>
            <div>
              <img src={redux} alt="" />
              <p>Redux</p>
            </div>
            <div>
              <img src={node} alt="" />
              <p>NodeJS</p>
            </div>
            <div>
              <img src={mongo} alt="" />
              <p>MongoDB</p>
            </div>
            <div>
              <img src={sass} alt="" />
              <p>Sass</p>
            </div>
            <div>
              <img src={html} alt="" />
              <p>HTML5</p>
            </div>
            <div>
              <img src={css} alt="" />
              <p>CSS3</p>
            </div>
          </div>
        </div>
        <div className={tab === 2 ? "content active-tab" : "content"}>
          <p>2</p>
        </div>
        <div className={tab === 3 ? "content active-tab" : "content"}>
          <p>3</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;