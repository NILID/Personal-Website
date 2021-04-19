import React from "react";
import "../styles/Contact.scss";
import ContactEmailContainer from "./ContactEmailContainer";

function Contact() {
  return (
    <div className="ContactContainer">
      <h1>Let's talk</h1>
      <ContactEmailContainer></ContactEmailContainer>
    </div>
  );
}

export default Contact;
