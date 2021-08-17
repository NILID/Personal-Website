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

import { facebook, github, linkedin, email } from "./ContactElements";

function Contact() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      {dictionary[language].map(({ titleContact }) => (
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
                  <h1>Let's chat</h1>
                  <p>
                    Whether you have a question, want to start a project or
                    simply want to connect. <br /> Feel free to send me a
                    message in the contact form.
                  </p>
                </LeftInnerContainer>
              </LeftContainer>
              <RightContainer>
                <RightInnerContainer>
                  <Form>
                    <input type="text" placeholder="Name *" />
                    <input type="email" placeholder="Email *" />
                    <textarea rows="10" placeholder="Message"></textarea>
                    <button>Submit</button>
                  </Form>
                </RightInnerContainer>
              </RightContainer>
            </FormContainer>
          </Container>
        </Contacts>
      ))}
    </>
  );
}

export default Contact;
