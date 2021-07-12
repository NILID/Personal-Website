import React from "react";
import { Contacts, Container, Title, Grid } from "./ContactElements";

function Contact() {
  return (
    <>
      <Contacts>
        <Title>
          <h1>Contact</h1>
        </Title>
        <Container>
          <Grid></Grid>
        </Container>
      </Contacts>
    </>
  );
}

export default Contact;
