import React from "react";
import "../../styles/Contact.scss";
import ContactEmailContainer from "./ContactEmailContainer";
import ContactFlexContainer from "./ContactFlexContainer";

function Contact() {
  return (
    <div className="ContactContainer">
      <h1>Let's talk</h1>
      <ContactFlexContainer></ContactFlexContainer>
    </div>
  );
}

export default Contact;
