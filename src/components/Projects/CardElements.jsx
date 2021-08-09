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
  /* height: 50vh; */
  /* position: absolute; */

  img {
    width: 100%;
    height: 400px;
  }
`;

export const CardName = styled.div`
  /* border: 1px solid black; */
  text-align: center;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Links = styled.div`
  display: flex;
  /* border: 1px solid pink; */
  justify-content: center;
`;

export const Button = styled.div`
  border: 1px solid blue;
`;
