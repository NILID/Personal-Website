import "./Home.scss";
import Menu from "../Menu/Menu";
import image from "../../assets/dev.png";

function Home() {
  return (
    <div className="Container">
      <Menu></Menu>
      <div className="HomeContainer">
        <div className="col col-1">
          <h1>
            Hello! I'm <span>Flávio</span>
          </h1>
          <p>
            Welcome to my Portfolio.<br></br> You can find some of my projects
            here and get in touch
          </p>
          <button>ABOUT ME</button>
          <button>CONTACT ME</button>
        </div>
        <div className="col col-2">
          <img className="colImg" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
