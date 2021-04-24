import React from "react";
import "../../styles/Menu.scss";
import logo from "../../assets/f.svg";
import uk from "../../assets/united-kingdom.svg";

function Menu() {
  return (
    <header>
      <div className="container container-nav">
        <div className="side-title">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
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

    // <div className="NavbarContainer">
    //   <img className="NavbarIcon" src={logo} alt="LOGO" />
    //   <li>
    //     <img className="NavbarFlag" src={uk} alt="" />
    //   </li>
    //   <li>
    //     <a href="#contact">Contact</a>
    //   </li>
    //   <li>
    //     <a href="#">Projects</a>
    //   </li>
    //   <li>
    //     <a href="#stacks">Stacks</a>
    //   </li>
    //   <li>
    //     <a href="#">Home</a>
    //   </li>
    // </div>
  );
}

export default Menu;
