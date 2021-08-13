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
      {dictionary[language].map(
        ({
          titleAboutMe,
          messageAboutMe,
          messageAboutMeSecondParagraph,
          messageAboutMeThirdParagraph,
        }) => (
          <Container id="about">
            <Techs>
              <img src={javascript} alt="ES6" />
              <img src={react} alt="React" />
              <img src={html} alt="Node" />
              <img src={css} alt="Mongo" />
              <img src={sass} alt="SQL" />
              <img src={node} alt="styled components" />
              <img src={node} alt="git" />
              <img src={node} alt="sass" />
              <img src={node} alt="sass" />
            </Techs>
            <ContainerTwo>
              <Description>
                <h1>{titleAboutMe}</h1>
                <p>{messageAboutMe}</p>
                <p>{messageAboutMeSecondParagraph}</p>
                <p>{messageAboutMeThirdParagraph}</p>
              </Description>
            </ContainerTwo>
          </Container>
        )
      )}
    </>
  );
}

export default About;
