import styled from "styled-components";

// IMPORT AND EXPORT TECHS IMGS
import react from "../../assets/about/react.svg";
import javascript from "../../assets/about/javascript.svg";
import html from "../../assets/about/html.svg";
import css from "../../assets/about/css.svg";
import sass from "../../assets/about/sass.svg";
import node from "../../assets/about/nodejs.svg";
import mongodb from "../../assets/about/mongodb.svg";
import postgresql from "../../assets/about/postgresql.svg";
import typescript from "../../assets/about/typescript.svg";
import solidity from "../../assets/about/solidity.svg";

export {
  react,
  javascript,
  html,
  css,
  sass,
  node,
  mongodb,
  postgresql,
  typescript,
  solidity,
};

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 4rem auto;
  }
`;

export const Techs = styled.div`
  width: 50%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 70%;
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
    display: none;
  }
`;

export const TechsMobile = styled.div`
  width: 50%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  display: none;

  img {
    width: 70%;
    height: 20vh;
    cursor: pointer;
  }
  img:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    display: grid;
  }
`;

export const ContainerTwo = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.div`
  height: 100%;
  color: #2e186a;

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

    h1 {
      text-align: center;
    }
  }
`;
