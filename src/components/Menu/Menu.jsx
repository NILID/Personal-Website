import React, { useState, useContext } from "react";
import "./MenuStyle.scss";
import { FaBars } from "react-icons/fa";
import br from "../../assets/menu/brazil.svg";
import en from "../../assets/menu/eua.svg";
import ru from "../../assets/menu/russia.svg";
import jp from "../../assets/menu/japan.svg";

import { LanguageContext } from "../../App";

import dictionary from "../Dictionary/dictionary";

import { Link } from "react-scroll";

function Menu() {
  const languages = {
    en: {
      about: "about",
      project: "project",
      contact: "contact",
    },
    ptbr: {
      about: "sobre",
      project: "projetos",
      contact: "contatos",
    },
    jp: {
      about: "約",
      project: "事業",
      contact: "コンタクト",
    },
    ru: {
      about: "обо мне",
      project: "проекты",
      contact: "контакт",
    },
  };

  // burger menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  // translation
  const [language, setLanguage] = useContext(LanguageContext);
  console.log("language", language);

  return (
    <div>
      {dictionary[language].map((about, project, contract) => {})}
      <div className={click ? "main-container" : ""} onClick={() => Close()} />

      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div exact to="/" className="nav-logo">
            <h1>Flávio</h1>
          </div>

          <div className="links">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="" activeClassName="active" className="nav-links">
                  <Link to="about" smooth={true} duration={1000}>
                    {languages[language].about}
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a href="" activeClassName="active" className="nav-links">
                  <Link to="project" smooth={true} duration={1000}>
                    {languages[language].project}
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a href="" activeClassName="active" className="nav-links">
                  <Link to="contact" smooth={true} duration={1000}>
                    {languages[language].contact}
                  </Link>
                </a>
              </li>

              <div className="flags-desktop">
                <li>
                  <img
                    src={en}
                    alt="en"
                    onClick={() => {
                      setLanguage("en");
                    }}
                  />
                </li>
                <li>
                  <img
                    src={br}
                    alt="ptbr"
                    onClick={() => {
                      setLanguage("ptbr");
                    }}
                  />
                </li>
                <li>
                  <img
                    src={ru}
                    alt="ru"
                    onClick={() => {
                      setLanguage("ru");
                    }}
                  />
                </li>
                <li>
                  <img
                    src={jp}
                    alt="jp"
                    onClick={() => {
                      setLanguage("jp");
                    }}
                  />
                </li>
              </div>
            </ul>
          </div>

          <div className="flags">
            <img
              src={en}
              alt="en"
              onClick={() => {
                setLanguage("en");
              }}
            />
            <img
              src={br}
              alt="ptbr"
              onClick={() => {
                setLanguage("ptbr");
              }}
            />
            <img
              src={ru}
              alt="ru"
              onClick={() => {
                setLanguage("ru");
              }}
            />
            <img
              src={jp}
              alt="jp"
              onClick={() => {
                setLanguage("jp");
              }}
            />
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
