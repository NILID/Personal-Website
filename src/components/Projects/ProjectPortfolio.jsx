import React, { useContext } from "react";

import { Container, Columns, Title } from "./ProjectPortfolioElements";
import Card from "../Projects/Card";
import desktopMockup from "../../assets/projects/modern-browser-mockup.png";
import algoGif from "../../assets/projects/algo.gif";

import dictionary from "../Dictionary/dictionary";
import { LanguageContext } from "../../App";

function ProjectPortfolio() {
  const [language] = useContext(LanguageContext);

  return (
    <div className="project">
      {dictionary[language].map(({ project }) => (
        <>
          <Title>
            <h1>{project}</h1>
          </Title>
          <Container>
            <Columns>
              <Card
                image={desktopMockup}
                title="Logistic Website"
                description="This website was fully done with ReactJS"
              />
            </Columns>
            <Columns>
              <Card
                image={algoGif}
                title="Merge Sort"
                description="This was a project done with ReactJS and JavaScript to study algorithms. I'm implementing sorting algorithms and visualization."
              />
            </Columns>
          </Container>
        </>
      ))}
    </div>
  );
}

export default ProjectPortfolio;
