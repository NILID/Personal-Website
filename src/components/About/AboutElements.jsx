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
  height: 90vh;
  margin: auto;
  display: flex;
`;

export const Techs = styled.div`
  width: 40%;
  border: 1px solid pink;
  display: flex;
  flex-wrap: wrap;

  img {
    margin: auto;
    width: 40%;
    height: 20vh;
    border: 1px dotted blue;
    cursor: pointer;
  }
`;

export const ContainerTwo = styled.div`
  width: 60%;
`;

export const Description = styled.div`
  height: 50%;
  border: 1px dotted blue;
`;

export const Tabs = styled.div`
  height: 50%;
  border: 1px dotted blue;
`;
