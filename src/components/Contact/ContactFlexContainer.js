import React from "react";
import "../../styles/ContactFlexContainer.scss";

function ContactFlexContainer() {
  return (
    <div className="ContactFlexContainer">
      <div>
        <form action="">
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" name="name" id="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="text" name="name" id="email" />
          <br />
          <label htmlFor="subject">Subject:</label>
          <br />
          <input type="text" name="subject" id="subject" />
        </form>
      </div>
      <div>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <img src="" alt="icon1" />
        <img src="" alt="icon2" />
      </div>
    </div>
  );
}

export default ContactFlexContainer;
