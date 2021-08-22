import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 80%;
  height: 90vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 90vh;
  }
`;

export const ContentOne = styled.div`
  width: 50%;
  height: 50%;
  color: #2e186a;
  text-align: left;
  margin: auto;

  h2 {
    font-size: 3rem;
  }

  .sloganFirstPart {
    margin-top: 1rem;
  }

  span {
    color: #fe7624;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 1rem;

    h2 {
      font-size: 2rem;
      text-align: left;
    }
  }
`;

export const ContentTwo = styled.div`
  width: 50%;
  height: 60%;
  /* margin: auto; */

  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;

    img {
      width: 100%;
      margin: auto;
    }
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
