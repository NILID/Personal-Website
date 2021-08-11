import styled from "styled-components";

export const Card = styled.div`
  width: 20vw;
  height: 70vh;
  border: 1px dotted black;
  margin-top: 20vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardImage = styled.div`
  border: 1px solid pink;
  width: 90%;
  height: 50vh;
  margin: auto;
  margin-top: -50px;
  img {
    width: 100%;
    height: 100%;
  }
  img:hover {
  }
`;

export const CardName = styled.div`
  height: 5vh;
  margin: auto;
  color: #2e186a;
  width: 90%;
  font-size: 2rem;
  p {
    text-align: center;
  }
`;

export const Description = styled.div`
  text-align: left;
  /* border: 1px solid pink; */
  width: 90%;
  margin: auto;
  height: 8vh;
  color: #2e186a;
`;

export const Links = styled.div`
  width: 90%;
  display: flex;
  border: 1px solid pink;
  justify-content: space-between;
  margin: auto;

  img {
    width: 7vh;
  }
`;

export const Preview = styled.a`
  height: 8vh;
  width: 15vh;
  border: 1px solid black;
`;
export const Github = styled.a`
  height: 8vh;
  width: 15vh;
  border: 1px solid black;
`;
