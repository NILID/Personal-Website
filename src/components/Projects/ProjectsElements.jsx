import styled from "styled-components";

export const Project = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100vh;
  margin: auto;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #2e186a;
`;

export const Card = styled.div``;
export const Images = styled.div``;
