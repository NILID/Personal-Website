import styled from "styled-components";

export const Card = styled.div`
  width: 20vw;
  height: 70vh;
  border: 1px dotted black;
  margin-top: 5%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardImage = styled.div`
  border: 1px solid pink;
  width: 18vw;
  height: 50vh;
  margin: auto;
  margin-top: -50px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardName = styled.div`
  margin: auto;
  border: 1px solid black;
  height: 5vh;
  text-align: center;
  width: 90%;
  /* margin-top: 1rem; */
`;

export const Description = styled.div`
  text-align: center;
  border: 1px solid pink;
  width: 90%;
  margin: 1rem auto;
  height: 5vh;
`;

export const Links = styled.div`
  width: 90%;
  display: flex;
  border: 1px solid pink;
  justify-content: space-between;
  margin: auto;
`;

export const Button = styled.div`
  border: none;
  background-color: #fe7624;
  justify-content: center;
  color: #ffffff;
  font-size: 1rem;
  padding: 1rem 3rem;
  /* letter-spacing: 0.1rem; */
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  height: 5vh;
`;
