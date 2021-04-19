import "../styles/Home.scss";
import coder from "../assets/alternative.svg";
import Menu from "./Menu";

function Home() {
  return (
    <div className="HomeContainer">
      <Menu></Menu>
      <div className="HomeTitle">
        <h1>Hi! My name is Flávio and I'm a Software Engineer</h1>
      </div>

      <h4>
        Coding with passion since 2017! I love to work with frontend
        applications and AI
      </h4>
      <img className="HomeImgContainer" src={coder} alt="gif" />
    </div>
  );
}

export default Home;
