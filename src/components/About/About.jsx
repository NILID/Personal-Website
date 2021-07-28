import React, { useState, useContext } from "react";

import {
  Container,
  ContainerTwo,
  Techs,
  Description,
} from "./AboutElements.jsx";

import { javascript, react, html, css, sass, node } from "./AboutElements.jsx";

import dictionary from "../Dictionary/dictionary";
import { LanguageContext } from "../../App";

function About() {
  const [language] = useContext(LanguageContext);

  const [description, setDescription] = useState(false);

  return (
    <>
      {dictionary[language].map(({ titleAboutMe, messageAboutMe }) => (
        <Container>
          <Techs>
            <img src={javascript} alt="JavaScript" />
            <img src={react} alt="React" />
            <img src={html} alt="Html" />
            <img src={css} alt="CSS" />
            <img src={sass} alt="Sass" />
            <img src={node} alt="Node" />
          </Techs>
          <ContainerTwo>
            <Description>
              <h1>{titleAboutMe}</h1>
              <p>{messageAboutMe}</p>
            </Description>
            {/* <Tabs>tabs</Tabs> */}
          </ContainerTwo>
        </Container>
      ))}
    </>
  );
}

export default About;

{
  /* <Container>
        <Techs>
          <img src={javascript} alt="JavaScript" />
          <img src={react} alt="React" />
          <img src={html} alt="Html" />
          <img src={css} alt="CSS" />
          <img src={sass} alt="Sass" />
          <img src={node} alt="Node" />
        </Techs>
        <ContainerTwo>
          <Description>
            <h1>About Me</h1>
            <p>
              Hi, my name is Flávio and I'm currently Team Manager of Olymp
              Trade Forex company and a web developer. <br />
              <br /> Currently, I'm pursuing my last year of my Bachelor's in
              Software Engineering at Siberian Federal University. Over the past
              6 years, coding has developed a passion of mine, specifically, in
              the realm of web development and blockchain.
              <br />
              <br /> I've dedicated my time to gaining proficiency in
              development to better myself as a developer and problem solver. I
              am able to create clean and functional websites and confidently
              deliver products to my clients knowing that they are of high
              quality.
            </p>
          </Description>
        
        </ContainerTwo>
      </Container> */
}
