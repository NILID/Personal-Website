import styled from "styled-components";

export const Lang = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;

  li:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
  }
`;

export const Logo = styled.div`
  color: #2e186a;
  cursor: pointer;
`;

export const ItemsMenu = styled.ul`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #2e186a;
  margin: auto;

  li {
    display: inline-block;
    color: #2e186a;
    cursor: pointer;
    padding-left: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageIcon = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  img {
    height: 2em;
    margin-left: 1em;
    cursor: pointer;
  }

  img:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
  }
`;
