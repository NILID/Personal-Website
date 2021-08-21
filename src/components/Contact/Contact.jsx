import React, { useContext } from "react";
import emailjs from "emailjs-com";

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

  const sendEmail = (e) => {
    e.preventDefault(
      "service_m2gcgsu",
      "service_m2gcgsu",
      e.target,
      "user_K7jfotuJyQQt3XbVn6diZ"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    emailjs.sendForm();
  };

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
                    <Form onSubmit={sendEmail}>
                      <input type="text" name="name" placeholder="Name *" />
                      <input
                        type="email"
                        name="userEmail"
                        placeholder="Email *"
                      />
                      <textarea
                        rows="10"
                        placeholder="Message"
                        name="message"
                      ></textarea>
                      <button type="submit">{contactSubmit}</button>
                      <input type="submit" />
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
