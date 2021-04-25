import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import StacksMainComponent from "./About/StacksMainComponent";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import "../styles/Main.scss";
import AboutMe from "./About/AboutMe";

function Main() {
  return (
    <div>
      <Home></Home>
      {/* <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact> */}
    </div>
  );
}

export default Main;
