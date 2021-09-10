import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap;
  flex-direction: column; */
  border: 1px solid black;
  height: 100vh;
  width: 80%;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Columns = styled.div`
  flex-basis: 100%;
  /* border: 1px solid black; */
`;

export const Title = styled.div`
  h1 {
    text-align: center;
    color: #2e186a;
  }
`;
