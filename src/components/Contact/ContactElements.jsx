import styled from "styled-components";

//import and export network icons
import facebook from "../../assets/contact/facebook.svg";
import github from "../../assets/contact/github.svg";
import linkedin from "../../assets/contact/linkedin.svg";
import email from "../../assets/contact/email.svg";

export { facebook, github, linkedin, email };

// Styling
export const Contacts = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 70vh;
  margin: auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid pink; */

  h1:hover {
    cursor: pointer;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid pink; */

  img {
    width: 4vh;
    margin: 0.5em;
  }

  img:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Illustration = styled.div`
  width: 50%;
  border: 1px dotted black;
`;

export const Form = styled.div`
  width: 50%;
  border: 1px dotted black;
`;
