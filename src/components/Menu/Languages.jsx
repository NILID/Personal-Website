import React, { useState } from "react";
import {
  English,
  Japanese,
  Russian,
  Portuguese,
  Lang,
  LangFlag,
} from "./NavbarElements";

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
        <LangFlag>
          <img src={English} alt="EN" onClick={handleLanguage("en")} />
        </LangFlag>
        <LangFlag>
          <img src={Portuguese} alt="PT-BR" onClick={handleLanguage("en")} />
        </LangFlag>
        <LangFlag>
          <img src={Japanese} alt="JP" />
        </LangFlag>
        <LangFlag>
          <img src={Russian} alt="RU" />
        </LangFlag>
      </Lang>
    </>
  );
}

export default Languages;
