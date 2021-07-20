import "../styles/Main.scss";
import Home from "../components/Home/Home.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </Router>
    </div>
  );
}

export default Main;
