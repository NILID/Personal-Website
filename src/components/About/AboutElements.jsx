import styled from "styled-components";

// IMPORT AND EXPORT TECHS IMGS
import react from "../../assets/react.svg";
import javascript from "../../assets/javascript.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import sass from "../../assets/sass.svg";
import node from "../../assets/react.svg";

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
