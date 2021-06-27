import Home from "./Home/Home";
import AboutMe from "./About/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Bottom from "./Bottom/Bottom";

import "../styles/Main.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        {/* <Home></Home>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Contact></Contact>
        <Bottom></Bottom> */}
      </Router>
      {/* <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
      <Bottom></Bottom> */}
    </div>
  );
}

export default Main;
