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
          Technologies
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
          <h3>TeamWhale</h3>
          <p className="exp-desc">Customer Support Coordinator</p>
          <p className="exp-desc">
            Managed two teams simultaneously of 25 specialists providing
            customer support to clients in Africa, India, and Latin America.
            Over 29,000 chats answered and 15,000 emails closed monthly. •
            Worked with Quality Assurance providing full training and feedback
            to all specialists hired. • Helped to develop a claim management
            system, helping solve any issue fast and helping the client feel
            embraced by our support.
          </p>
          <h3>EconoCargo</h3>
          <p>Web Developer</p>
          <p>
            I've helped to develop and maintain a system of freight quotes using
            C#, Javascript and MySQL database to provide precise freight prices
            to over 5,000 locations in Brazil
          </p>
        </div>
        <div className={tab === 3 ? "content active-tab" : "content"}>
          <h2>Software Engineering</h2>
          <p>
            Siberian Federal University <br />
            2017 - 2022
          </p>
          <h3>Russian - Advanced</h3>
          <p>Siberian Federal University</p>
          <h3>English - Advanced</h3>
          <p>UFES - Centro de Línguas</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
