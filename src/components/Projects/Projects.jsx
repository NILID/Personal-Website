import React, { useContext } from "react";
import "./Projects.scss";

import landscapePlaceholder from "../../assets/landtest.jpg";

import { Project, Container, Title } from "./ProjectsElements";

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
              img={landscapePlaceholder}
              name="Algorithm"
              description="Visualization of three algorithms. This project was done fully with ReactJS and Javascript."
              livePreview="live"
              github="link"
            ></CardComponent>
            <CardComponent
              img={landscapePlaceholder}
              name="Project"
              description="Make Up"
              livePreview="live"
              github="link"
            ></CardComponent>
            <CardComponent
              img={landscapePlaceholder}
              name="Project"
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
