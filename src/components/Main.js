import Home from "./Home/Home";
import AboutMe from "./About/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Bottom from "./Bottom/Bottom";

import "../styles/Main.scss";

function Main() {
  return (
    <div>
      <Home></Home>
      <AboutMe></AboutMe>
      {/* <Projects></Projects>
      <Contact></Contact>
      <Bottom></Bottom> */}
    </div>
  );
}

export default Main;
