import "../styles/Main.scss";
import Navbar from "../components/Menu/Navbar.jsx";
import Home from "../components/Home/Home.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Projects></Projects>
      </Router>
    </div>
  );
}

export default Main;
