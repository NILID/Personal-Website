import React, { useState } from "react";
import "./Menu.scss";
import logo from "../../assets/f.svg";
import burgerMenu from "../../assets/burger-menu.svg";

function Menu() {
  const [showMenu, setMenu] = useState();

  function display() {
    setMenu((value) => !value);
  }

  return (
    <header>
      <div className="container container-nav">
        <div className="logo">
          <img
            className={`logo${showMenu ? " logoHidden" : null}`}
            src={logo}
            alt=""
          />
        </div>
        <nav className={`topnav${showMenu ? " responsive" : "logo"}`}>
          <ul>
            <li className="icon">
              <img
                onClick={() => {
                  display();
                }}
                src={burgerMenu}
                alt="logo"
                className="img"
              />
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
