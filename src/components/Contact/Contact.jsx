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

import "./contact.scss";

import { facebook, github, linkedin, email } from "./ContactElements";

function Contact() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      <div class="container">
        <div class="form-container">
          <div class="left-container">
            <div class="left-inner-container">
              <h2>Let's Chat</h2>
              <p>
                Whether you have a question, want to start a project or simply
                want to connect.
              </p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
            </div>
          </div>
          <div class="right-container">
            <div class="right-inner-container">
              <form action="#">
                <h2 class="lg-view">Contact</h2>
                <h2 class="sm-view">Let's Chat</h2>
                <p>* Required</p>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Company" />
                <input type="phone" placeholder="Phone" />
                <textarea rows="4" placeholder="Message"></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

{
  /* {dictionary[language].map(({ titleContact }) => (
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
      ))} */
}
