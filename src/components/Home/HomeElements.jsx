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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// BUTTON
export const Button = styled.div`
  a {
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: white;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 10px 50px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    user-select: none;
    color: white;
    font-size: 0.5em;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(135deg, #2e186a, #2e186a);
      border-radius: 4px;
      transition: box-shadow 0.5s ease, transform 0.2s ease;
      will-change: transform;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
        rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));
    }

    &:hover::before {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    &::after {
      position: relative;
      display: inline-block;
      content: attr(data-title);
      transition: transform 0.2s ease;
    }
  }
`;
