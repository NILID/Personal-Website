import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 80%;
  height: 90vh;
  border: 1px solid pink;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentOne = styled.div`
  width: 50%;
  height: 100%;
  border: 1px dotted pink;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentTwo = styled.div`
  width: 50%;
  height: 100%;
  border: 1px dotted pink;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
