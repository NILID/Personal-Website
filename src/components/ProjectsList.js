import React from "react";
import ProjectsListSection from "./ProjectsListSection";
import "../styles/ProjectsList.scss";
import img from "../assets/placeholder.jpg";

function ProjectsList() {
  return (
    <div className="ProjectGridContainer">
      <div className="ProjectGrid">
        <ProjectsListSection img={img} description={"Any description here"} />
      </div>
      <div className="ProjectGrid">
        <ProjectsListSection img={img} description={"Any description here"} />
      </div>
      <div className="ProjectGrid">
        <ProjectsListSection img={img} description={"Any description here"} />
      </div>
      <div className="ProjectGrid">
        <ProjectsListSection img={img} description={"Any description here"} />
      </div>
      <div className="ProjectGrid">
        <ProjectsListSection img={img} description={"Any description here"} />
      </div>
      <div className="ProjectGrid">
        <ProjectsListSection img={img} description={"Any description here"} />
      </div>
    </div>
  );
}

export default ProjectsList;
