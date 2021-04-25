import "./Home.scss";
import Menu from "../Menu/Menu";
import image from "../../assets/dev.png";

function Home() {
  return (
    <div className="MenuContainer">
      <Menu></Menu>
      <div className="HomeContainer">
        <div>
          <h1>
            Hello! I'm <span>Flávio</span>
          </h1>
          <h3>
            Welcome to my Portfolio. You can find some of my projects here and
            get in touch
          </h3>
          <button>ABOUT ME</button>
        </div>
        <div>
          <img className="HomeContainerImg" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
