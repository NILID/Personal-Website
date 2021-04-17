import Menu from "./Menu";
import Home from "./Home";
import Stacks from "./Stacks";
import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/Main.scss";

function Main() {
  return (
    <div>
      <Menu></Menu>
      <Home></Home>
      <Stacks></Stacks>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default Main;
