import React from "react";
import "./Projects.scss";
import placeholder from "../../assets/placeholder.svg";
import AI from "../../assets/AI.jpg";

function Projects() {
  return (
    <div class="project-container">
      <div className="title">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-one item">
        <h2>Face Recognition</h2>
        <button className="button button1">VIEW PROJECT</button>
      </div>
      <div className="project-two item">
        <img src={placeholder} alt="" />
        <h2>AI dev</h2>
        <p>small lorem ipsum</p>
        <button>CLICK HERE</button>
      </div>
      <div className="project-three item">
        <img src={placeholder} alt="" />
        <h2>AI dev</h2>
        <p>small lorem ipsum</p>
        <button>CLICK HERE</button>
      </div>
      <div className="project-four item">
        <img src={placeholder} alt="" />
        <h2>AI dev</h2>
        <p>small lorem ipsum</p>
        <button>CLICK HERE</button>
      </div>
      <div className="project-five item">
        <img src={placeholder} alt="" />
        <h2>AI dev</h2>
        <p>small lorem ipsum</p>
        <button>CLICK HERE</button>
      </div>
      <div className="project-six item">
        <img src={placeholder} alt="" />
        <h2>AI dev</h2>
        <p>small lorem ipsum</p>
        <button>CLICK HERE</button>
      </div>
    </div>
  );
}

export default Projects;
