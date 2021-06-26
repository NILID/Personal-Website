import React, { useState } from "react";
import "./Menu.scss";
import logo from "../../assets/logo.svg";
import burgerMenu from "../../assets/burger-menu.svg";

import { Link } from "react-scroll";

function Menu() {
  const [showMenu, setMenu] = useState();

  function display() {
    setMenu((value) => !value);
  }

  return (
    <header>
      <div className="container-menu container-nav">
        <div className="logo">
          <p>Flávio</p>
          {/* <img
            className={`logo${showMenu ? " logoHidden" : null}`}
            src={logo}
            alt=""
          /> */}
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
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={1000}>
                <a>Projects</a>
              </Link>
            </li>
            <li className="contact">
              <Link to="contact" smooth={true} duration={1000}>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
