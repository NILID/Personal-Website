import React, { useState } from "react";

import "./MenuStyle.scss";

function Menu() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div exact to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="" ctiveClassName="active" className="nav-links">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="" ctiveClassName="active" className="nav-links">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a href="" ctiveClassName="active" className="nav-links">
                CONTACT
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}>A</i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
