import React, { useState } from "react";
import "../../styles/Menu.scss";
import logo from "../../assets/f.svg";
import burgerMenu from "../../assets/burger-menu.svg";

function Menu() {
  const [isOpen, setOpen] = useState(false);

  // const burger = () => {
  //   let x = document.getElementById("bgFunction");
  //   if (x.className === "topnav") {
  //     x.className += "responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // };

  return (
    <header>
      <div className="container container-nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="topnav" id="bgFunction">
          <ul>
            <li className="icon">
              <img src={burgerMenu} alt="" />
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
