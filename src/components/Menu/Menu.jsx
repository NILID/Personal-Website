import React, { useState } from "react";
import "./MenuStyle.scss";

import br from "../../assets/menu/brazil.svg";
import en from "../../assets/menu/eua.svg";
import ru from "../../assets/menu/russia.svg";
import jp from "../../assets/menu/japan.svg";

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

          <div>
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
          </div>

          <div className="flags">
            <img src={en} alt="en" />
            <img src={br} alt="ptbr" />
            <img src={ru} alt="ru" />
            <img src={jp} alt="jp" />
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
