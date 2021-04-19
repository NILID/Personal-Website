import React from "react";
import ProjectList from "./ProjectsList";
import "../styles/Projects.scss";

function Projects() {
  return (
    <div className="ProjectsContainer">
      <h1>Projects </h1>
      <h4>Here are some of my most recent projects</h4>
      <ProjectList></ProjectList>
    </div>
  );
}

export default Projects;
