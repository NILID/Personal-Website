import Main from "./components/Main";
import Home from "./components/Home/Home";
import About from "./components/About/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import PageNotFound from "./PageNotFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/Main.css";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Qahiri&display=swap");
  body {
    font-family: "Qahiri", sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
