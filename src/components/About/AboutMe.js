import React from "react";
import flavio from "../../assets/flavio.jpg";
import Tabs from "./Tabs";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="grid-1 flex-abt">
        <img src={flavio} alt="" />
      </div>
      <div className="grid-2 flex-abt">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          sunt labore similique ut earum nam nihil voluptas hic quasi id? Libero
          iste corrupti recusandae! Autem voluptatem aperiam perferendis ut
          quasi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Cupiditate possimus deleniti distinctio error. Odit ab iure culpa
          molestias reiciendis totam minus consectetur. Illum esse laborum a
          libero consequatur iste inventore?
        </p>
      </div>
      <div className="grid-3 flex-abt">
        <Tabs />
      </div>
      <div className="grid-4 flex-abt"></div>
    </div>
  );
}

export default AboutMe;
