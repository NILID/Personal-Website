import React, { useContext, useState } from "react";
import "../styles/Main.scss";
import Home from "../components/Home/Home.jsx";
import Menu from "../components/Menu/Menu.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Email from "../components/Contact/Email";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const LanguageContext = React.createContext();

function Main() {
  return (
    <div>
      <Router>
        <Menu></Menu>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Email></Email>
      </Router>
    </div>
  );
}

export default Main;
