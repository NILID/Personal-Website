import React, { useState, useContext } from "react";

import {
  Container,
  ContainerTwo,
  Techs,
  TechsMobile,
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
  solidity,
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
            <Techs className="toHide">
              <img src={javascript} alt="ES6" />
              <img src={react} alt="React" />
              <img src={postgresql} alt="sql" />
              <img src={mongodb} alt="Mongo" />
              <img src={node} alt="node" />
              <img src={sass} alt="sass" />

              <img src={solidity} alt="solidity" />
              <img src={typescript} alt="typescript" />
              {/* <img src={node} alt="sass" /> */}
            </Techs>
            <ContainerTwo>
              <Description>
                <h1>{titleAboutMe}</h1>
                <p>{messageAboutMe}</p>
                <p>{messageAboutMeSecondParagraph}</p>
                <p>{messageAboutMeThirdParagraph}</p>
                <TechsMobile>
                  <img src={javascript} alt="ES6" />
                  <img src={react} alt="React" />
                  <img src={postgresql} alt="sql" />
                  <img src={mongodb} alt="Mongo" />
                  <img src={node} alt="node" />
                  <img src={typescript} alt="typescript" />
                  <img src={node} alt="styled components" />
                  <img src={sass} alt="sass" />
                  <img src={node} alt="sass" />
                </TechsMobile>
              </Description>
            </ContainerTwo>
          </Container>
        )
      )}
    </>
  );
}

export default About;
