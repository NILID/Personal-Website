import React from "react";
import flavio from "../../assets/flavio.jpg";
import Tabs from "./Tabs";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="title-container">
        <h1>ABOUT</h1>
      </div>
      <div className="photo-container">
        <img src={flavio} alt="" />
      </div>
      <div className="description-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          sunt labore similique ut earum nam nihil voluptas hic quasi id? Libero
          iste corrupti recusandae! Autem voluptatem aperiam perferendis ut
          quasi? Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="skill-container">
        <Tabs></Tabs>
      </div>
    </div>
  );
}

export default AboutMe;
