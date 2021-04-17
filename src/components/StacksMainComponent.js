import React from "react";
import Stacks from "./Stacks";
import "../styles/StacksMainComponent.scss";

function StacksMainComponent() {
  return (
    <div className="StacksMainComponentContainer">
      <hr />
      <h1 href="#stacks">STACKS</h1>
      <Stacks></Stacks>
    </div>
  );
}

export default StacksMainComponent;
