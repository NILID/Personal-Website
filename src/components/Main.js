import Menu from "./Menu";
import Home from "./Home";
import StacksMainComponent from "./StacksMainComponent";
import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/Main.scss";

function Main() {
  return (
    <div>
      <Home></Home>
      <StacksMainComponent></StacksMainComponent>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default Main;
