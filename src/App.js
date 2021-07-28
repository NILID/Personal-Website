import Main from "./components/Main";
import React, { useState, useEffect } from "react";
import Home from "./components/Menu/Menu";
import Menu from "./components/Home/Home.jsx";

import "./styles/Main.css";

const defaultLanguage = "br";
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  React.useEffect(() => {
    window.localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className="App">
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Main></Main>
        <Menu></Menu>
        <Home></Home>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
