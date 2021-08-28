import Main from "./components/Main";
import React, { useState, useEffect } from "react";

import "./styles/Main.css";

const defaultLanguage = "en";
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
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
