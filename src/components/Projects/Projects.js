import React from "react";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        <div className="img">
          <img
            className="img2"
            src="https://dummyimage.com/600x400/000/fff"
            alt=""
          />
        </div>
        <div className="desc">
          <h4>AI faces</h4>
        </div>
      </div>
      <div className="projects-grid">
        <div className="img">1</div>
        <div className="desc">
          <h4>AI faces</h4>
        </div>
      </div>
      <div className="projects-grid">
        <div className="img">1</div>
        <div className="desc">
          <h4>AI faces</h4>
        </div>
      </div>
      <div className="projects-grid">
        <div className="img">1</div>
        <div className="desc">
          <h4>AI faces</h4>
        </div>
      </div>
    </div>
  );
}

export default Projects;
