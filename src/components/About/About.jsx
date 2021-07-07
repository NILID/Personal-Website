import React from "react";

import {
  Container,
  ContainerTwo,
  Techs,
  Description,
  Tabs,
} from "./AboutElements";

import { javascript, react, html, css, sass, node } from "./AboutElements";

function About() {
  return (
    <>
      <Container>
        <Techs>
          <img src={javascript} alt="JavaScript" />
          <img src={react} alt="Reac" />
          <img src={html} alt="Html" />
          <img src={css} alt="CSS" />
          <img src={sass} alt="Sass" />
          <img src={node} alt="Node" />
        </Techs>
        <ContainerTwo>
          <Description>desc</Description>
          <Tabs>tabs</Tabs>
        </ContainerTwo>
      </Container>
    </>
  );
}

export default About;
