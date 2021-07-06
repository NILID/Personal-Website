import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
    font-family: 'Lato', Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  margin: auto;
  width: 80%;
  height: 90vh;
  border: 1px solid pink;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentOne = styled.div`
  width: 50%;
  height: 100%;
  border: 1px dotted pink;
  font-size: 4em;
  color: #2e186a;

  span {
    color: #fe7624;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentTwo = styled.div`
  width: 50%;
  height: 100%;
  border: 1px dotted pink;

  img {
    width: 90%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// BUTTON
export const Button = styled.div`
  width: 100%;
  /* border: 1px solid pink; */
  font-size: 2.2rem;
  margin-top: 5%;

  a {
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: white;
    background: linear-gradient(135deg, #fe7624, #fe7624);
    padding: 0.3rem 2rem;
    border-radius: 5px;
  }
`;
