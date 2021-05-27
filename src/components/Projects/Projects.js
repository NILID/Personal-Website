import React from "react";
import "./Projects.scss";
import placeholder from "../../assets/placeholder.svg";

function Projects() {
  return (
    <div class="project-container">
      <div className="title">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-one">
        <img src={placeholder} alt="" />
        <h2>AI dev</h2>
        <p>small lorem ipsum</p>
        <button>CLICK HERE</button>
      </div>
      <div className="project-two">
        <img src={placeholder} alt="" />
        <h2>AI dev</h2>
        <p>small lorem ipsum</p>
        <button>CLICK HERE</button>
      </div>
    </div>
  );
}

export default Projects;
