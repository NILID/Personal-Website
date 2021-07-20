import styled from "styled-components";

import English from "../../assets/menu/eua.svg";
import Portuguese from "../../assets/menu/brazil.svg";
import Japanese from "../../assets/menu/japan.svg";
import Russian from "../../assets/menu/russia.svg";

// EXPORTING FLAGS
export { English, Portuguese, Japanese, Russian };

// NAVBAR COMPONENT
export const Nav = styled.nav`
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

// RIGHT NAV COMPONENT
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #2e186a;
  margin: auto;

  li {
    padding: 1rem;
    font-size: 1rem;
  }

  li:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
  }

  .image {
    display: none;
  }

  //RESPONSIVE
  @media (max-width: 768px) {
    background-color: #2e186a;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    transition: transform 0.3s ease-in-out;
    display: block;

    /* li {
      color: #fff;
      display: flex;
      justify-content: center;
    }

    img {
      width: 15%;
    }

    .image {
      display: flex;
      justify-content: center;
    } */
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
