import React from "react";
import Enflag from "../../assets/united-states.svg";

import {
  Nav,
  MenuLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnFlag,
  English,
  Japanese,
  Russian,
  Portuguese,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <MenuLink to="/">
          <h1>Flávio</h1>
        </MenuLink>
        <Bars />
        <NavMenu>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/services" activeStyle>
            Projects
          </MenuLink>
          <MenuLink to="/contact-us" activeStyle>
            Contact
          </MenuLink>
        </NavMenu>
        <NavBtn>
          <NavBtnFlag>
            <img src={English} alt="EN" />
          </NavBtnFlag>
          <NavBtnFlag>
            <img src={Portuguese} alt="BR" />
          </NavBtnFlag>
          <NavBtnFlag>
            <img src={Japanese} alt="JP" />
          </NavBtnFlag>
          <NavBtnFlag>
            <img src={Russian} alt="RU" />
          </NavBtnFlag>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
