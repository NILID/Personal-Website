import React, { useState } from "react";
import { Lang, Logo } from "./LanguagesElements";
import { English, Japanese, Russian, Portuguese } from "./NavbarElements";

const languages = {
  en: {
    about: "about",
    project: "project",
    contact: "contact",
    slogan: "Think the Design, and I design the Code.",
    button: "Learn more",
  },
  ptbr: {
    about: "sobre",
    project: "projetos",
    contact: "contatos",
    slogan: "Think the Design, and I design the Code.",
    button: "Learn more",
  },
  jp: {
    about: "nihon",
    project: "nihon",
    contact: "nihon",
    slogan: "nihon",
    button: "nihon",
  },
  ru: {
    about: "руский",
    project: "руский",
    contact: "руский",
    slogan: "руский",
    button: "руский",
  },
};

function Languages() {
  const [language, setLanguage] = useState("en");

  const handleLanguage = (language) => (event) => {
    setLanguage(language);
  };

  return (
    <>
      <Lang>
        <Logo>
          <h1>Flávio</h1>
        </Logo>
        <div className="languageText">
          <li>{languages[language].about}</li>
          <li>{languages[language].project}</li>
          <li>{languages[language].contact}</li>
        </div>
        <div className="languageIcons">
          <img src={English} alt="EN" onClick={handleLanguage("en")} />

          <img src={Japanese} alt="JP" onClick={handleLanguage("jp")} />

          <img src={Russian} alt="RU" onClick={handleLanguage("ru")} />
          <img src={Portuguese} alt="PT-BR" onClick={handleLanguage("ptbr")} />
        </div>
      </Lang>
    </>
  );
}

export default Languages;
