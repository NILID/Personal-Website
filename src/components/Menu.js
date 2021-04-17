import React from "react";
import "../styles/Menu.scss";
import logo from "../assets/f.svg";

function Menu() {
  return (
    <div className="navbar">
      <img src={logo} alt="LOGO" />
      <li>PT-BR</li>
      <li>Contact</li>
      <li>Projects</li>
      <li>
        <a href="#stacks">Stacks</a>
      </li>
      <li>Home</li>
    </div>
  );
}

export default Menu;
