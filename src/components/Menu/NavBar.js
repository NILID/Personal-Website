import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnFlag,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Flávio</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnFlag to="/signin">Sign In</NavBtnFlag>
          <NavBtnFlag to="/signin">Sign In</NavBtnFlag>
          <NavBtnFlag to="/signin">Sign In</NavBtnFlag>
          <NavBtnFlag to="/signin">Sign In</NavBtnFlag>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
