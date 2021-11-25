import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 80%;
  height: 90vh;
  display: flex;
  border: 1px solid black;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ContentOne = styled.div`
  width: 5%;
  height: 100%;
  border: 1px solid black;

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
    display: none;
  }
`;

export const ContentTwo = styled.div`
  width: 90%;
  height: 100%;
  color: #2e186a;
  border: 1px solid black;

  h2 {
    font-size: 5rem;
  }

  .sloganFirstPart {
    margin-top: 15vh;
  }

  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: 2rem;
    }

    img {
      width: 100%;
      margin: auto;
    }
  }
`;

export const Link = styled.div`
  margin-top: 45vh;
  display: flex;
  flex-direction: column;

  img {
    width: 2rem;
  }

  .linkedin {
    margin-top: 1.2em;
  }

  img:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
  }

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    height: 10vh;
    border: 1px solid black;
  }
`;



export const Intro = styled.div`
  margin-top: 2rem;

  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
      text-align: left;
    }

    .introFirstPart {
      margin-top: 1rem;
    }
  }
`;

export const Button = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: left;

  a {
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: white;
    background-color: #fe7624;
    padding: 1rem 2rem;
  }

  div:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    /* border: 1px solid black; */

    div {
      margin: auto;
      width: 100%;
    }

    a {
      display: flex;
      justify-content: center;
    }
  }
`;
