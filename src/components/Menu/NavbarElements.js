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
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

// export const Nav = styled.nav`
//   background: #fff;
//   height: 10vh;
//   display: flex;
//   justify-content: space-between;
//   border: 1px dotted pink;
//   width: 80%;
//   margin: auto;
//   /* padding: 0.5rem calc((100vw - 1000px) / 2); */
//   /* z-index: 10; */

//   @media screen and (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const MenuLink = styled.div`
//   border: 1px solid;
//   display: inline;
//   color: #2e186a;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   /* padding: 0 1rem; */
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     color: #2e186a;
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #000;

//   @media screen and (max-width: 768px) {
//     display: block;
//     /* position: absolute; */
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const MobileMenuShow = styled.div`
//   color: blue;
//   width: 50%;
//   height: 100%;
//   border: 1px solid black;
//   /* display: fixed; */
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnFlag = styled.div`
//   width: 2em;
//   margin-left: 0.5em;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     transform: scale(1.5);
//     cursor: pointer;
//   }
// `;
