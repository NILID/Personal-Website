import "./Home.scss";
import Menu from "../Menu/Menu";
import image from "../../assets/dev.png";

function Home() {
  return (
    <div className="container-home">
      <Menu></Menu>
      <div className="flex-container">
        <div className="col">
          <h1>
            Hello! I'm <span>Flávio</span>
          </h1>
          <p>I'm a Brazilian Software Engineer based in Russia</p>
          <button className="btn">
            <a href="#">About me</a>
          </button>
        </div>
        <div className="col">
          <img className="colImg" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
