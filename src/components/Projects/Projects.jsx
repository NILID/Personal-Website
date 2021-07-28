import React, { useContext } from "react";
import "./Projects.scss";

import { Project, Container, Title, Card, Images } from "./ProjectsElements";

import dictionary from "../Dictionary/dictionary";
import { LanguageContext } from "../../App";

function Projects() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      {dictionary[language].map(({ titleProjects }) => (
        <Project>
          <Container>
            <Title>
              <h1>{titleProjects}</h1>
            </Title>
            <Card></Card>
          </Container>
        </Project>
      ))}
    </>
  );
}

export default Projects;
