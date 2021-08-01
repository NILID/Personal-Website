import styled from "styled-components";

//import and export network icons
import facebook from "../../assets/contact/facebook.svg";
import github from "../../assets/contact/github.svg";
import linkedin from "../../assets/contact/linkedin.svg";
import email from "../../assets/contact/email.svg";

export { facebook, github, linkedin, email };

// Styling

export const Contacts = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 70vh;
  margin: auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #2e186a;
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

// NEW STUFF

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const FormContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LeftInnerContainer = styled.div`
  height: 50%;
  width: 80%;
  text-align: center;
  line-height: 22px;
`;
export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const RightInnerContainer = styled.div`
  width: 70%;
  height: 80%;
  text-align: center;
`;

export const Form = styled.div`
  input,
  textarea {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    font-size: 0.8rem;
  }

  input:focus,
  textarea:focus {
    outline: 1px solid black;
  }

  button {
    border-radius: 20px;
    border: 1px solid #00b4cf;
    background-color: #00b4cf;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.7;
  }
`;

// export const Illustration = styled.div`
//   width: 50%;
//   border: 1px dotted black;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     width: 100%;
//     height: 100%;
//     margin: auto;
//   }
// `;
