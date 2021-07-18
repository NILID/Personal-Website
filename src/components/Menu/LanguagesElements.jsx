import styled from "styled-components";

export const Lang = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  border: 1px dotted pink;
  width: 100%;

  .languageText {
    border: 1px dotted black;
  }

  li {
    display: inline-block;
    /* padding: 1em; */
    color: #2e186a;
    cursor: pointer;
  }

  li:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
  }

  img {
    width: 30px;
    height: 30px;
    margin: auto;
  }

  .languageIcons {
  }

  @media (max-width: 768px) {
    .languageText,
    .languageIcons {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  color: #2e186a;
  cursor: pointer;
`;
