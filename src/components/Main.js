import Home from "./Home/Home";
import StacksMainComponent from "./About/StacksMainComponent";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
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
