import styled from "styled-components";

import English from "../../assets/eua.svg";
import Portuguese from "../../assets/brazil.svg";
import Japanese from "../../assets/japan.svg";
import Russian from "../../assets/russia.svg";

// EXPORTING FLAGS
export { English, Portuguese, Japanese, Russian };

// LOGO
export const Logo = styled.div`
  border: 1px solid pink;
  display: inline;
  color: #2e186a;
  display: flex;
  align-items: center;
  /* text-decoration: none; */
  /* padding: 0 1rem; */
  cursor: pointer;
  &.active {
    color: #2e186a;
  }
`;

// NAVBAR COMPONENT
export const Nav = styled.nav`
  width: 80%;
  height: 10vh;
  border: 1px dotted blue;
  display: flex;
  justify-content: space-between;
  margin: auto;

  .logo {
    padding: 15px 0;
  }
`;

// RIGHT NAV COMPONENT
export const Ul = styled.ul`
  border: 1px solid pink;
  margin: auto;
  list-style: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #2e186a;
  /* flex-flow: row nowrap; */

  li {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #2e186a;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

//BURGER
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

//LANGUAGES COMPONENT
export const Lang = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LangFlag = styled.div`
  width: 2em;
  margin-left: 0.5em;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
    cursor: pointer;
  }
`;
