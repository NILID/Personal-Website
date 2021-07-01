import "./Home.scss";
// import Menu from "../Menu/Menu";
import image from "../../assets/dev.png";

import { Link } from "react-scroll";

function Home() {
  return (
    <div className="container-home">
      <div className="flex-container">
        <div className="col">
          <h1>
            Think the <span>Design</span>, <br></br> and I design the
            <span> Code</span>.
          </h1>
          <p>
            I will come up with a beautiful looking modern website for your
            needs
          </p>
          <button className="btn">
            <Link to="about" smooth={true} duration={1000}>
              <a>ABOUT ME</a>
            </Link>
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
