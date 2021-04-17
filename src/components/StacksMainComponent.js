import React from "react";
import Stacks from "./Stacks";
import "../styles/StacksMainComponent.scss";

function StacksMainComponent() {
  return (
    <div className="StacksMainComponentContainer">
      <div className="StacksMainComponentText" href="#stacks">
        <h2>MY SKILLS</h2>
      </div>
      <Stacks></Stacks>
    </div>
  );
}

export default StacksMainComponent;
