import React, { useState } from "react";

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
          </Navbar>

          <NavLink>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </NavLink>

          <NavFlags>
            <img src="" alt="en" />
            <img src="" alt="pt" />
            <img src="" alt="ru" />
          </NavFlags>

          <NavIcon onClick={handleClick}>Icon</NavIcon>
        </MainContainer>
      </Container>
    </>
  );
}

export default Menu;
