import React from "react";

import {
  Container,
  ContainerTwo,
  Techs,
  Description,
  Tabs,
} from "./AboutElements.jsx";

import { javascript, react, html, css, sass, node } from "./AboutElements.jsx";

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
          <Description>
            Hi, my name is Flávio and I'm currently Team Manager of Olymp Trade
            Forex company and a web developer. Currently, I'm pursuing my last
            year of my Bachelor's in Software Engineering at Siberian Federal
            University. Over the past 6 years, coding has developed a passion of
            mine, specifically, in the realm of web development and blockchain.
            I've dedicated my time to gaining proficiency in development to
            better myself as a developer and problem solver. I am able to create
            clean and functional websites and confidently deliver products to my
            clients knowing that they are of high quality.{" "}
          </Description>
          <Tabs>tabs</Tabs>
        </ContainerTwo>
      </Container>
    </>
  );
}

export default About;
