import React from "react";

import {
  Container,
  ContainerTwo,
  Techs,
  Description,
  Tabs,
} from "./AboutElements";

function About() {
  return (
    <>
      <Container>
        <Techs>tech</Techs>
        <ContainerTwo>
          <Description>desc</Description>
          <Tabs>tabs</Tabs>
        </ContainerTwo>
      </Container>
    </>
  );
}

export default About;
