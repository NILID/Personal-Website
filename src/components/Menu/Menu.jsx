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
            Flávio
            <i className="fa fa-code"></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="" ctiveClassName="active" className="nav-links">
                about
              </a>
            </li>
            <li className="nav-item">
              <a href="" ctiveClassName="active" className="nav-links">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a href="" ctiveClassName="active" className="nav-links">
                contact
              </a>
            </li>
          </ul>

          <div>
            <img src="" alt="en" />
            <img src="" alt="ptbr" />
            <img src="" alt="ru" />
            <img src="" alt="jp" />
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}>A</i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
