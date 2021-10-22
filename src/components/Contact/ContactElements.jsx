import styled from "styled-components";

//import and export network icons
import facebook from "../../assets/contact/facebook.svg";
import github from "../../assets/contact/github.svg";
import linkedin from "../../assets/contact/linkedin.svg";
import email from "../../assets/contact/email.svg";

export { facebook, github, linkedin, email };

export const Contacts = styled.div`
  width: 80%;
  height: 90vh;
  margin: 10% auto;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #2e186a;

  h1:hover {
    cursor: pointer;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;

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
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LeftInnerContainer = styled.div`
  height: 70%;
  width: 100%;
  color: #2e186a;

  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    h1 {
      display: none;
    }
    p {
      text-align: left;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const RightInnerContainer = styled.div`
  width: 100%;
  height: 70%;
  text-align: center;
`;

export const Form = styled.form`
  input,
  textarea {
    background-color: #eee;
    border: none;
    padding: 1rem;
    margin: 0.5rem 0;
    width: 100%;
    font-size: 1rem;
  }

  input:focus,
  textarea:focus {
    outline: 1px solid #fe7624;
  }

  button {
    border: none;
    background-color: #fe7624;
    color: #ffffff;
    font-size: 1rem;
    padding: 1rem 3rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.7;
  }
`;
