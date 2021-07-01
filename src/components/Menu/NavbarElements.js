import styled from "styled-components";
// import { MenuLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import English from "../../assets/eua.svg";
import Portuguese from "../../assets/brazil.svg";
import Japanese from "../../assets/japan.svg";
import Russian from "../../assets/russia.svg";

// EXPORTING FLAGS
export { English, Portuguese, Japanese, Russian };

export const Nav = styled.nav`
  background: #fff;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  border: 1px dotted pink;
  width: 80%;
  margin: auto;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  /* z-index: 10; */
`;

export const MenuLink = styled.div`
  color: #2e186a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #2e186a;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    /* position: absolute; */
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnFlag = styled.div`
  width: 2em;
  margin-left: 0.5em;

  /* border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  /* margin-left: 24px; */
  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }  */
`;
