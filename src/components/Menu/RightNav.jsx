import { useState } from "react";
import { Ul } from "./NavbarElements";
import { English, Japanese, Russian, Portuguese } from "./NavbarElements";
import { IntlProvider, FormattedMessage, FormattedDate } from "react-intl";

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
  const [locale, setLocale] = useState("en");

  const handleChange = (e) => {
    setLocale(e.taget.value);
  };

  return (
    <>
      <Ul open={open}>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
        <li className="image">
          <img src={English} alt="EN" />
        </li>
        <li className="image">
          <img src={Japanese} alt="JP" />
        </li>
        <li className="image">
          <img src={Russian} alt="RU" />
        </li>
        <li className="image">
          <img src={Portuguese} alt="PT-BR" />
        </li>
      </Ul>
    </>
  );
};

export default RightNav;
