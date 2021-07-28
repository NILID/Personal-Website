import React, { createContext, useState, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import Home from "../components/Home/Home";

const defaultLanguage = "en";

export const LanguageContext = createContext();

export default function Lang({ children }) {
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
      slogan: "Portugues",
      button: "Portugues",
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

  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  useEffect(() => {
    window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
      <Menu></Menu>
      <Home></Home>
    </LanguageContext.Provider>
  );
}
