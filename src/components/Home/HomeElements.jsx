import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 80%;
  height: 100vh;
  display: flex;
  border: 1px solid black;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ContentOne = styled.div`
  width: 50%;
  height: 20%;
  color: #2e186a;
  border: 1px solid pink;
  text-align: center;
  margin: auto;

  p {
    font-size: 2rem;
  }

  span {
    color: #fe7624;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const ContentTwo = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 90%;
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;

    img {
      width: 100%;
      margin: auto;
    }
  }
`;

export const Button = styled.div`
  width: 100%;
  margin-top: 2rem;

  a {
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: white;
    background-color: #fe7624;
    /* background: linear-gradient(135deg, #fe7624, #fe7624); */
    padding: 0.3rem 2rem;
  }

  div:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    a {
      display: flex;
      justify-content: center;
    }
  }
`;
