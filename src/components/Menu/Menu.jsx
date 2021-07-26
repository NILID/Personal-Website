import React, { useState, useContext } from "react";
import "./MenuStyle.scss";
import { FaBars } from "react-icons/fa";
import br from "../../assets/menu/brazil.svg";
import en from "../../assets/menu/eua.svg";
import ru from "../../assets/menu/russia.svg";
import jp from "../../assets/menu/japan.svg";

import { useIdiom } from "../../provider/Language.jsx";

import LanguagesProvider from "../../provider/Language";

function Menu() {
  // burger menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  // tradution
  const idiom = useIdiom();

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />

      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div exact to="/" className="nav-logo">
            <h1>Flávio</h1>
          </div>

          <div className="links">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="" activeClassName="active" className="nav-links"></a>
              </li>
              <li className="nav-item">
                <a href="" activeClassName="active" className="nav-links"></a>
              </li>
              <li className="nav-item">
                <a href="" activeClassName="active" className="nav-links"></a>
              </li>

              <div className="flags-desktop">
                <li>
                  <img src={en} alt="en" />
                </li>
                <li>
                  <img src={br} alt="ptbr" />
                </li>
                <li>
                  <img src={ru} alt="ru" />
                </li>
                <li>
                  <img src={jp} alt="jp" />
                </li>
              </div>
            </ul>
          </div>

          <div className="flags">
            <img src={en} alt="en" />
            <img src={br} alt="ptbr" />
            <img src={ru} alt="ru" />
            <img src={jp} alt="jp" />
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}>
              <FaBars />
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
