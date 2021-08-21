import React, { useContext } from "react";
import {
  Contacts,
  Container,
  Title,
  Icons,
  FormContainer,
  LeftContainer,
  LeftInnerContainer,
  RightContainer,
  RightInnerContainer,
  Form,
} from "./ContactElements";

import dictionary from "../Dictionary/dictionary";

import { LanguageContext } from "../../App";

import { facebook, github, linkedin } from "./ContactElements";

function Contact() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      {dictionary[language].map(
        ({
          titleContact,
          leftInnerContainerTitle,
          leftInnerContainerMessage,
          leftInnerContainerSecondMessage,
          contactSubmit,
        }) => (
          <Contacts id="contact">
            <Title>
              <h1>{titleContact}</h1>
            </Title>
            <Icons>
              <img src={facebook} alt="Facebook" />
              <img src={github} alt="Github" />
              <img src={linkedin} alt="Linkedin" />
            </Icons>
            <Container>
              <FormContainer>
                <LeftContainer>
                  <LeftInnerContainer>
                    <h1>{leftInnerContainerTitle}</h1>
                    <p>
                      {leftInnerContainerMessage}
                      <br /> {leftInnerContainerSecondMessage}
                    </p>
                  </LeftInnerContainer>
                </LeftContainer>
                <RightContainer>
                  <RightInnerContainer>
                    <Form>
                      <input type="text" placeholder="Name *" />
                      <input type="email" placeholder="Email *" />
                      <textarea rows="10" placeholder="Message"></textarea>
                      <button>{contactSubmit}</button>
                    </Form>
                  </RightInnerContainer>
                </RightContainer>
              </FormContainer>
            </Container>
          </Contacts>
        )
      )}
    </>
  );
}

export default Contact;
