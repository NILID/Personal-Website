import "../styles/Main.scss";
import Navbar from "../components/Menu/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
      </Router>
    </div>
  );
}

export default Main;
