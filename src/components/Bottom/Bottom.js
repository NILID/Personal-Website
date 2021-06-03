import React from "react";
import "./Bottom.scss";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

function Bottom() {
  return (
    <div className="bottom-container">
      <div className="icons">
        <img src={facebook} alt="" />
      </div>
      <div className="icons">
        <img src={github} alt="" />
      </div>
      <div className="icons">
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
}

export default Bottom;
