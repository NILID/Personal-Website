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
  /* border: 1px solid black; */
  margin: auto;
  display: flex;
`;

export const Techs = styled.div`
  width: 50%;
  border: 1px solid pink;
`;

export const ContainerTwo = styled.div`
  width: 50%;
`;

export const Description = styled.div`
  height: 50%;
  border: 1px dotted blue;
`;

export const Tabs = styled.div`
  height: 50%;
  border: 1px dotted blue;
`;
