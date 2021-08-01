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
