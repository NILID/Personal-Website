import React from "react";
import "../../styles/ProjectsListSection.scss";

function ProjectsListSection(props) {
  return (
    <div className="ProjectsGridContainer">
      <img className="Img" src={props.img} alt="Project Image" />
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectsListSection;
