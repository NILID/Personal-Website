import React from "react";

import {
  Container,
  FormContainer,
  LeftContainer,
  LeftInnerContainer,
  RightContainer,
  RightInnerContainer,
  Form,
} from "./EmailElements";

function Email() {
  return (
    <>
      <Container>
        <FormContainer>
          <LeftContainer>
            <LeftInnerContainer>
              <h2>Let's chat</h2>
              <p>
                Whether you have a question, want to start a project or simply
                want to connect
              </p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
            </LeftInnerContainer>
          </LeftContainer>
          <RightContainer>
            <RightInnerContainer>
              <Form>
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Company" />
                <input type="phone" placeholder="Phone" />
                <textarea rows="4" placeholder="Message"></textarea>
                <button>Submit</button>
              </Form>
            </RightInnerContainer>
          </RightContainer>
        </FormContainer>
      </Container>
    </>
  );
}

export default Email;
