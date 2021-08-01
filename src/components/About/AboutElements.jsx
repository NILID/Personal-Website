import styled from "styled-components";

// IMPORT AND EXPORT TECHS IMGS
import react from "../../assets/about/react.svg";
import javascript from "../../assets/about/javascript.svg";
import html from "../../assets/about/html.svg";
import css from "../../assets/about/css.svg";
import sass from "../../assets/about/sass.svg";
import node from "../../assets/about/nodejs.svg";

export { react, javascript, html, css, sass, node };

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
    margin: 2px solid black;
  }
`;

export const Techs = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  img {
    margin: auto;
    width: 40%;
    height: 20vh;
    cursor: pointer;
  }
  img:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

export const ContainerTwo = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.div`
  height: 100%;
  color: #2e186a;
  border: 1px solid pink;

  h1 {
    font-size: 2rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 100%;
    margin: auto;
  }
`;
