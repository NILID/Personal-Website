import { useState } from "react";
import { Ul } from "./NavbarElements";
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

const RightNav = ({ open }) => {
  const [language, setLanguage] = useState("en");

  const handleLanguage = (language) => (event) => {
    setLanguage(language);
  };

  return (
    <>
      <Ul open={open}>
        <li>{languages[language].about}</li>
        <li>{languages[language].project}</li>
        <li>{languages[language].contact}</li>
        <li className="image">
          <img src={English} alt="EN" onClick={handleLanguage("en")} />
        </li>
        <li className="image">
          <img src={Japanese} alt="JP" onClick={handleLanguage("jp")} />
        </li>
        <li className="image">
          <img src={Russian} alt="RU" onClick={handleLanguage("ru")} />
        </li>
        <li className="image">
          <img src={Portuguese} alt="PT-BR" onClick={handleLanguage("ptbr")} />
        </li>
      </Ul>
    </>
  );
};

export default RightNav;
