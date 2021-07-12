import React from "react";
import { Contacts, Container, Title, Grid, Icons } from "./ContactElements";

import { facebook, github, linkedin } from "./ContactElements";

function Contact() {
  return (
    <>
      <Contacts>
        <Title>
          <h1>Contact</h1>
        </Title>
        <Icons>
          <img src={facebook} alt="Facebook" />
          <img src={github} alt="Github" />
          <img src={linkedin} alt="Linkedin" />
        </Icons>
        <Container>
          <Grid></Grid>
        </Container>
      </Contacts>
    </>
  );
}

export default Contact;
