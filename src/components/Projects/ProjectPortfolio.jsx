import React from "react";

import { Container, Columns, Title } from "./ProjectPortfolioElements";

import Card from "../Projects/Card";

import desktopMockup from "../../assets/projects/modern-browser-mockup.png";

function ProjectPortfolio() {
  return (
    <>
      <Title></Title>
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
            image={desktopMockup}
            title="Logistic Website"
            description="This website was fully done with ReactJS"
          />
        </Columns>
      </Container>
    </>
  );
}

export default ProjectPortfolio;
