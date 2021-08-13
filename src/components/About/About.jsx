import React, { useState, useContext } from "react";

import {
  Container,
  ContainerTwo,
  Techs,
  Description,
} from "./AboutElements.jsx";

import {
  javascript,
  react,
  sass,
  node,
  mongodb,
  postgresql,
  typescript,
} from "./AboutElements.jsx";

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
              <img src={postgresql} alt="sql" />
              <img src={mongodb} alt="Mongo" />
              <img src={node} alt="node" />
              <img src={typescript} alt="typescript" />
              <img src={node} alt="styled components" />
              <img src={sass} alt="sass" />
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
