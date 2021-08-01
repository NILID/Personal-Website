import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const FormContainer = styled.div`
  display: flex;
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
