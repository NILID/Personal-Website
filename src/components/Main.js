import React, { useContext, useState } from "react";
import "../styles/Main.scss";
import Home from "../components/Home/Home.jsx";
import Menu from "../components/Menu/Menu.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LanguagesContext } from "../provider/Language";

const defaultLanguage = "br";

export const LanguageContext = React.createContext();

function Main() {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  React.useEffect(() => {
    window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div>
      <LanguagesContext.Provider value={[language, setLanguage]}>
        <Router>
          <Menu></Menu>
          <Home></Home>
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
        </Router>
      </LanguagesContext.Provider>
    </div>
  );
}

export default Main;
