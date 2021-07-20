import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import {
  Container,
  MainContainer,
  Navbar,
  Logo,
  NavLink,
  NavFlags,
  NavIcon,
} from "./MenuElements";

function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close = () => setClick(false);

  return (
    <>
      <Container>
        <MainContainer
          className={click ? "main-container" : ""}
          onClick={() => close()}
        >
          <Navbar>
            <Logo>
              <h1>Flávio</h1>
            </Logo>

            <NavLink className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">about</li>
              <li className="nav-item">projects</li>
              <li className="nav-item">contact</li>
            </NavLink>

            <NavFlags>
              <img src="" alt="en" />
              <img src="" alt="pt" />
              <img src="" alt="ru" />
            </NavFlags>

            <NavIcon onClick={handleClick}>
              <i className={click ? "FaBars" : "FaBars"}>
                <FaBars />
              </i>
            </NavIcon>
          </Navbar>
        </MainContainer>
      </Container>
    </>
  );
}

export default Menu;
