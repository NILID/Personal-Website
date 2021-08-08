import React, { useContext } from "react";
import "./Projects.scss";

import { Project, Container, Title, Images } from "./ProjectsElements";

import CardComponent from "./Card";

import dictionary from "../Dictionary/dictionary";
import { LanguageContext } from "../../App";

function Projects() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      {dictionary[language].map(({ titleProjects }) => (
        <Project id="project">
          <Title>
            <h1>{titleProjects}</h1>
          </Title>
          <Container>
            <CardComponent
              name="Flavio"
              description="Make Up"
              livePreview="live"
              github="link"
            ></CardComponent>
            <CardComponent
              name="Flavio"
              description="Make Up"
              livePreview="live"
              github="link"
            ></CardComponent>
            <CardComponent
              name="Flavio"
              description="Make Up"
              livePreview="live"
              github="link"
            ></CardComponent>
          </Container>
        </Project>
      ))}
    </>
  );
}

export default Projects;
