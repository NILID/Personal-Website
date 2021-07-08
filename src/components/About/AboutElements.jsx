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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: auto;
    margin: 2px solid black;
  }
`;

export const Techs = styled.div`
  width: 50%;
  /* border: 1px solid pink; */
  display: flex;
  flex-wrap: wrap;

  img {
    margin: auto;
    width: 40%;
    height: 20vh;
    /* border: 1px dotted blue; */
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
  }
`;

export const Description = styled.div`
  height: 100%;
  border: 1px dotted blue;
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

// export const Tabs = styled.div`
//   height: 50%;
//   border: 1px dotted blue;
// `;

// TAB TEST
export const Tabs2 = styled.div`
  width: 100%;
  border: 1px dotted pink;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid blue;
`;

export const Button = styled.div`
  width: 100px;
  height: 20px;
`;

export const TabDesc = styled.div`
  width: 100%;
  height: 20px;
`;
