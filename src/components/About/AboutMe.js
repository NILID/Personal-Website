import React from "react";
import flavio from "../../assets/profile.jpg";
import Tabs from "./Tabs";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-container" id="about">
      <div className="title-container">
        <h1>ABOUT</h1>
      </div>
      <div className="photo-container">
        <img className="img" src={flavio} alt="" />
      </div>
      <div className="description-container">
        <p>
          I'm a dev that really enjoy working not only with code, but also with
          people, financial market and crypto.
        </p>
      </div>
      <div className="skill-container">
        <Tabs></Tabs>
      </div>
    </div>
  );
}

export default AboutMe;
