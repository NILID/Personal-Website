import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 80%;
  height: 80vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 80vh;
  }
`;

export const ContentOne = styled.div`
  width: 50%;
  height: 100%;
  font-size: 3rem;
  color: #2e186a;

  p {
    font-family: "Qahiri", sans-serif;
    margin-top: 30%;
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
  }

  @media (max-width: 768px) {
    width: 100%;

    img {
      width: 100%;
      margin: auto;
    }
  }
`;

// BUTTON
export const Button = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 10%;

  a {
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: white;
    background: linear-gradient(135deg, #fe7624, #fe7624);
    padding: 0.3rem 2rem;
  }

  @media (max-width: 768px) {
    a {
      display: flex;
      justify-content: center;
    }
  }
`;
