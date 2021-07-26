import React, { createContext, useState } from "react";

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

export const LanguagesContext = React.createContext(languages);

const [language, setLanguage] = useState("en");

function language() {
  return (
    <LanguagesContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguagesContext.Provider>
  );
}

export default language;
