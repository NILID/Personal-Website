import React from "react";
import "../../styles/AboutMe.scss";
import AboutMeGrid from "./AboutMeGrid";

function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <h1>Technologies</h1>
      <h4>Here are some techs and programming languages that I use</h4>
      <AboutMeGrid></AboutMeGrid>
    </div>
  );
}

export default AboutMe;
