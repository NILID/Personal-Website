import React, { useContext } from "react";
import {
  Contacts,
  Container,
  Title,
  Illustration,
  Icons,
  Form,
} from "./ContactElements";

import FormEmail from "./Email";

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
            <Illustration>
              <img src={email} alt="" />
            </Illustration>
            <Form>
              <FormEmail></FormEmail>
            </Form>
          </Container>
        </Contacts>
      ))}
    </>
  );
}

export default Contact;
