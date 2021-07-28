import React, { createContext, useState, useContext } from "react";

export const languages = {
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

export const LanguagesContext = React.createContext({ languages });

function Language() {
  const [idiom, setIdiom] = useState("en");

  const handleIdiom = (language) => (e) => {
    setIdiom(language);
  };

  return (
    <LanguagesContext.Provider
      value={{ idiom, setIdiom }}
    ></LanguagesContext.Provider>
  );
}

export function useIdiom() {
  const context = useContext(LanguagesContext);
  const { idiom, setIdiom } = context;
  return { idiom, setIdiom };
}

export default Language;
