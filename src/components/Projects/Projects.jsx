import React from "react";
import "./Projects.scss";

import { Project, Container, Title, Card, Images } from "./ProjectsElements";

function Projects() {
  return (
    <>
      <Project>
        <Container>
          <Title>
            <h1>Projects</h1>
          </Title>
          <Card>
            <Images></Images>
          </Card>
        </Container>
      </Project>
    </>

    // <div class="project-container" id="projects">
    //   <div className="title">
    //     <h1>PROJECTS</h1>
    //   </div>
    //   <div className="project-one item">
    //     <h2>Face Recognition</h2>
    //     <button className="button button1">VIEW PROJECT</button>
    //   </div>
    //   <div className="project-two item">
    //     <h2>Face Recognition</h2>
    //     <button className="button button1">VIEW PROJECT</button>
    //   </div>
    //   <div className="project-three item">
    //     <h2>Face Recognition</h2>
    //     <button className="button button1">VIEW PROJECT</button>
    //   </div>
    // </div>
  );
}

export default Projects;
